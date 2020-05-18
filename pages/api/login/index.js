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
             
                 const user = await Users.findOne({ username: req.body.username });

                if (!user) {
                    return res.status(200).json({ success:true, match: 0 });
                }

                if(req.body.password !== user.password){
                    return res.status(200).json({ success:true, match: 0 });
                }

                var fxt = { username: req.body.username };
                
                const users = await Users.findOneAndUpdate(fxt, { ip: req.body.ip, join: req.body.join,  }, {
                        new: true,
                        runValidators: true
                    });
                
                    return res.status(200).json({ success: true, match: 1, token: users.token })
               
                } catch (error) {
                    return res.status(400).json({ success:false });
                }
                break;
    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}