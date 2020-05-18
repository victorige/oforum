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
    const { 
        query: { id },
        method 
    } = req;


    const decodesecurepass = await jwtdecode(req.headers.securepass)
    if(decodesecurepass !== process.env.SECURE_PASS){
        return res.status(400).json({ success:false });
    }


    await update(id)
        

    switch  (method) {
        case 'GET':
            try{

                const userbalance = await Users.findOne({ username: id });

                if (!userbalance) {
                    return res.status(400).json({ success:false });
                }

                return res.status(200).json({ success: true, balance: userbalance.balance, payout: userbalance.payout });

            } catch (error) {
                return res.status(400).json({ success:false });
            }
            break;

            
    
        default:
            return res.status(400).json({ success:false, error: error.message });
            break;

    }
}