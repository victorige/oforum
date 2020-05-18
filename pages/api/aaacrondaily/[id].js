import dbConnect from '../../../utils/dbConnect';
import Infos from '../../../models/Infos';
import Users from '../../../models/Users';
import Payouts from '../../../models/Payouts';

dbConnect();

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

                const uinfoscheck = await Infos.findOne({ idd: 1 });

                var newdaily = uinfoscheck.daily + 1

                var fxt = { idd: 1 };
                var bbody = {
                    daily: newdaily
                }

                    const insert = await Infos.findOneAndUpdate(fxt, bbody, {
                        new: true,
                        runValidators: true
                    });
    
                    if (!insert) {
                        return res.status(400).json({ success: false });
                    }
    
                    return res.status(200).json({ success: true });

        

            } catch (error) {
                return res.status(400).json({ success:false, error: error.message });
            }
            break;

            
    
        default:
            return res.status(400).json({ success:false, error: error.message });
            break;

    }
}