import dbConnect from '../../../utils/dbConnect';
import Infos from '../../../models/Infos';
import Users from '../../../models/Users';
import Payouts from '../../../models/Payouts';
import { jwtdecode } from "../../../utils/auth";

dbConnect();

export function token(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

export const update = async(id) => {
    try{
        const uinfoscheck = await Infos.findOne({ idd: 1 });
        try{
            const uuserscheck = await Users.findOne({ username: id });

            if(uinfoscheck.month !== uuserscheck.balancemonth){
                if(uuserscheck.balance >= 150){
                    var userid = {
                        username: id
                    }
                    var fxt = { 
                        balance: 0,
                        balancemonth: uinfoscheck.month,
                    };
                    await Users.findOneAndUpdate(userid, fxt, {
                        new: true,
                        runValidators: true
                    });

                    var payoutbody = { 
                        user: uuserscheck.username,
                        account_name: uuserscheck.accountname,
                        account_bank: uuserscheck.bankname,
                        account_bankcode: uuserscheck.bankcode,
                        account_number: uuserscheck.accountnumber,
                        amount: uuserscheck.balance - 50,
                        currency: "NGN",
                        reference: uuserscheck.username+ '-' + token(10),
                        fee: "50",
                        status: 0
                    };
                    await Payouts.create(payoutbody);

                }else{
                    var userid = {
                        username: id
                    }
                    var fxt = { 
                        balancemonth: uinfoscheck.month,
                    };
                    await Users.findOneAndUpdate(userid, fxt, {
                        new: true,
                        runValidators: true
                    });
                }
            }
        }catch{
            return res.status(400).json({ success:false });    
        }
    }catch{
        return res.status(400).json({ success:false });
    }

}

export default async(req, res) => {
   
    const { method } = req;
    const id = req.body.id;

    const decodesecurepass = await jwtdecode(req.headers.securepass)
    if(decodesecurepass !== process.env.SECURE_PASS){
        return res.status(400).json({ success:false });
    }


    await update(id)
    
    switch  (method) {
      
        case 'POST':
            try{

                const infoscheck = await Infos.findOne({ idd: 1 });    
                const postuserbalance = await Users.findOne({ username: id });

                if (!postuserbalance) {
                    return res.status(400).json({ success:false });
                }

               
                if(infoscheck.quizhour == postuserbalance.quizhour && postuserbalance.quizstatus == 0 && postuserbalance.adclick == 1 && postuserbalance.quiznum == 20){
                    const updatebalance = postuserbalance.balance + 5;

                    var userid = {
                        username: id
                    }
                    var fxt = { 
                        balance: updatebalance,
                        quizstatus: 1,
                        share: infoscheck.daily
                    };

                    await Users.findOneAndUpdate(userid, fxt, {
                        new: true,
                        runValidators: true
                    });

                    if(postuserbalance.referral){
                        await update(postuserbalance.referral)

                        const rpostuserbalance = await Users.findOne({ username: postuserbalance.referral });
                        const rupdatebalance = rpostuserbalance.balance + 1;

                        var userid = {
                            username: postuserbalance.referral
                        }
                        var fxt = { 
                            balance: rupdatebalance
                        };
    
                        await Users.findOneAndUpdate(userid, fxt, {
                            new: true,
                            runValidators: true
                        });
                    }

                return res.status(200).json({ success: true });

                }

                return res.status(400).json({ success:false });

                

            } catch (error) {
                return res.status(400).json({ success:false, error: error.message });
            }
            break;

    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}