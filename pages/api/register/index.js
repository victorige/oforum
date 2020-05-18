import dbConnect from '../../../utils/dbConnect';
import Users from '../../../models/Users';
import { jwtdecode } from "../../../utils/auth";

dbConnect();

export default async(req, res) => {
    const { method } = req;

    const decodesecurepass = await jwtdecode(req.headers.securepass)
    if(decodesecurepass !== process.env.SECURE_PASS){
        return res.status(400).json({ success:false });
    }

    switch  (method) {
      
        case 'POST':
            try{
 
                    const users = await Users.create(req.body);

                    return res.status(200).json({ success: true, token: users.token, time: users.join })
                } catch (error) {
                    return res.status(400).json({ success:false });
                }
                break;
    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}