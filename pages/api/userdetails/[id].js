import dbConnect from '../../../utils/dbConnect';
import Users from '../../../models/Users';
import Infos from '../../../models/Infos';
import { jwtdecode } from "../../../utils/auth";

dbConnect();

export default async(req, res) => {
    const { 
        query: { id },
        method 
    } = req;

    const decodesecurepass = await jwtdecode(req.headers.securepass)
    if(decodesecurepass !== process.env.SECURE_PASS){
        return res.status(401).json({ success:false });
    }

    switch  (method) {
        case 'GET':
            try{


                const user = await Users.findOne({ token: id }).select('-password -token')

                if (!user) {
                    return res.status(401).json({ success:false });
                }

                const infoscheck = await Infos.findOne({ idd: 1 });
                return res.status(200).json({ success: true, data: user, quizhour: infoscheck.quizhour, daily: infoscheck.daily, current_session: infoscheck.current_session, next_session: infoscheck.next_session });

            } catch (error) {
                return res.status(400).json({ success:false });
            }
            break;

    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}