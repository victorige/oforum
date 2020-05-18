import dbConnect from '../../../utils/dbConnect';
import Infos from '../../../models/Infos';
import Users from '../../../models/Users';
import Payouts from '../../../models/Payouts';
import axios from 'axios';

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

export async function start() {
    var fxt = { idd: 1 };
    var bbody = {
                    payment_process: 1
                }
    const insert = await Infos.findOneAndUpdate(fxt, bbody, {
            new: true,
            runValidators: true
        });
    if (!insert) {
        return res.status(400).json({ success: false });
    }
}

export async function close() {
    var fxt = { idd: 1 };
    var bbody = {
                    payment_process: 0
                }
    const insert = await Infos.findOneAndUpdate(fxt, bbody, {
            new: true,
            runValidators: true
        });
    if (!insert) {
        return res.status(400).json({ success: false });
    }
}


export default async(req, res) => {
    const { 
        query: { id },
        method 
    } = req;
    
    if(id !== process.env.CRON_PASS){
        return res.status(400).json({ success:false });
    }

    switch  (method) {
        case 'GET':
            try{

                var uinfoscheck = await Infos.findOne({ idd: 1 });

                var paymentpause = uinfoscheck.payment_pause
                var paymentprocess = uinfoscheck.payment_process

                if(paymentpause != 1 && paymentprocess != 1){
                    await start()

                    var payoutcheck = await Payouts.findOne({ status: 0 });

                    if (!payoutcheck) {
                        await close()
                        return res.status(200).json({ success: true, message: 'Not Found' });
                    }
                    
                    var totalpayoutbalance = Number(payoutcheck.amount) + Number(payoutcheck.fee)
                    try{
                        var response = await axios.post("https://api.ravepay.co/v2/gpx/balance", {
                            currency: "NGN",
                            seckey: process.env.FLWSECK
                            });
                            var availablebalance = response.data.data.AvailableBalance

                            if(availablebalance >= totalpayoutbalance){
                                var fxt = { _id: payoutcheck._id };
                                var bbody = {
                                    status: 1
                                    }
                                const initiatepayout = await Payouts.findOneAndUpdate(fxt, bbody, {
                                                new: true,
                                                runValidators: true
                                });
                                if (!initiatepayout) {
                                    await close()
                                    return res.status(400).json({ success: false });
                                }

                                try{
                                    var response2 = await axios.post("https://api.ravepay.co/v2/gpx/transfers/create", {
                                        account_bank: payoutcheck.account_bankcode,
                                        account_number: payoutcheck.account_number,
                                        amount: payoutcheck.amount,
                                        seckey: process.env.FLWSECK,
                                        narration: "Oforum Payout",
                                        "currency": "NGN",
                                        reference: payoutcheck.reference,
                                    });

                                    var transferstatus = response2.data.data.status
                                    var transferid = response2.data.data.id

                                    if(transferstatus == "FAILED"){

                                        var fxt = { _id: payoutcheck._id };
                                        var bbody = {
                                            status: 0,
                                            reference: 'retry-' + token(15)
                                            }
                                        const initiatepayout2 = await Payouts.findOneAndUpdate(fxt, bbody, {
                                                        new: true,
                                                        runValidators: true
                                        });
                                        if (!initiatepayout2) {
                                            await close()
                                            return res.status(400).json({ success: false });
                                        }
                                        await close()
                                        return res.status(200).json({ success: true, message: 'Initiate Transfer Failed' });
                                    }else{
                                        var fxt = { _id: payoutcheck._id };
                                        var bbody = {
                                            status: 1,
                                            transferid: transferid
                                        }
                                        const initiatepayout2 = await Payouts.findOneAndUpdate(fxt, bbody, {
                                                        new: true,
                                                        runValidators: true
                                        });
                                        if (!initiatepayout2) {
                                            await close()
                                            return res.status(400).json({ success: false });
                                        }

                                        await close()
                                        return res.status(200).json({ success: true, message: 'Initiate Transfer Success' });
                                    }


                                }catch{
                                    await close()
                                    return res.status(400).json({ success: false });
                                }

                            }else{
                                await close()
                                return res.status(200).json({ success: true, message: 'low balance' });
                            }

       
                    }catch{
                        await close()
                        return res.status(400).json({ success: false });
                    }


                    
                }else{
                    await close()
                    return res.status(400).json({ success: false });
                }


            } catch (error) {
                await close()
                return res.status(400).json({ success:false });
            }
            break;

            
    
        default:
            await close()
            return res.status(400).json({ success:false });
            break;

    }
}