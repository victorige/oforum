import dbConnect from '../../../utils/dbConnect';
import Infos from '../../../models/Infos';
import Users from '../../../models/Users';
import Payouts from '../../../models/Payouts';

dbConnect();

export function formatAMPM(date) {
    var strTime  = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    return strTime;
  }

  export function formatAMPM2(date) {
    var hours = date.setHours(date.getHours()+2);
    var datte = new Date(hours)
    var strTime  = datte.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    return strTime;
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

                const uinfoscheck = await Infos.findOne({ idd: 1 });

                var newquizhour = uinfoscheck.quizhour + 1

                var currenttime = formatAMPM(new Date)
                var nexttime = formatAMPM2(new Date)


                var fxt = { idd: 1 };
                var bbody = {
                    quizhour: newquizhour,
                    current_session: currenttime,
                    next_session: nexttime
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