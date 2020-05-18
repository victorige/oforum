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

                var bbody = { status: 1 };
                                
                const verify = await Payouts.find(bbody).limit(30)

                verify.forEach(async(payout) => {

                    try{

                        var response = await axios.get("https://api.ravepay.co/v2/gpx/transfers?seckey=" + process.env.FLWSECK + "&reference=" + payout.reference + "&id=" + payout.transferid );

                        if(response.data.data.transfers[0].status == "SUCCESSFUL"){
                            
                            var fxt = { _id: payout._id };
                            var bbody = {
                                status: 2
                                }

                            await Payouts.findOneAndUpdate(fxt, bbody, {
                                            new: true,
                                            runValidators: true
                            });

                        }

                        if(response.data.data.transfers[0].status == "FAILED"){
                            var time = new Date(response.data.data.transfers[0].date_created);
                            var now = new Date();
                            var seconds = ((now.getTime() - time.getTime()) * .001) >> 0;
                            var minutes = seconds / 60;
                            var hours = minutes / 60;

                            if(hours >= 30){
                                var fxt = { _id: payout._id };
                                var bbody = {
                                    status: 0,
                                    reference: 'retry-' + token(15)
                                    }

                                await Payouts.findOneAndUpdate(fxt, bbody, {
                                                new: true,
                                                runValidators: true
                                });

                            }

                        }
                        
                    }catch(error){
                        return res.status(400).json({ success: false, data: error.message });
                    }

  
                });

                return res.status(200).json({ success: true });


            } catch (error) {
               
                return res.status(400).json({ success:false });
            }
            break;

            
    
        default:
           
            return res.status(400).json({ success:false });
            break;

    }
}