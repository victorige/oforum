import dbConnect from '../../../utils/dbConnect';
import Infos from '../../../models/Infos';
import Users from '../../../models/Users';
import { jwtdecode } from "../../../utils/auth";

dbConnect();

export default async(req, res) => {
    const { 
        query: { id },
        method 
    } = req;


    const decodesecurepass = await jwtdecode(req.headers.securepass)
    if(decodesecurepass !== process.env.SECURE_PASS){
        return res.status(400).json({ success:false });
    }


    switch  (method) {
       
            case 'POST':
            try{

                const user = await Users.findOne({ username: id });

                if (!user) {
                    return res.status(400).json({ success:false });
                }

                if(req.body.page != user.adnum || user.adclick !== 0){
                    return res.status(400).json({ success:false });
                }

                var userid = {
                    username: id
                };

                var fxt = { 
                    adclick: 1,
                    adclicktime: new Date()
                };

                await Users.findOneAndUpdate(userid, fxt, {
                    new: true,
                    runValidators: true
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