import dbConnect from '../../../utils/dbConnect';
import Users from '../../../models/Users';
import { jwtdecode } from "../../../utils/auth";

dbConnect();

export default async(req, res) => {
    const {
        query: { id },
        method
    } =req;

    const decodesecurepass = await jwtdecode(req.headers.securepass)
    if(decodesecurepass !== process.env.SECURE_PASS){
        return res.status(400).json({ success:false });
    }

    switch (method) {
       
            case 'PUT':
                try {

        

                    var fxt = { token: id };
                    
                    const user = await Users.findOne({ token: id })

                    if (!user) {
                        return res.status(400).json({ success:false });
                    }

                    const read = user.read

                    const checkread = await Users.find({ token: id, read:{ $elemMatch: {id: req.body.id, slug: req.body.slug }} })
                    
                    
                    if(checkread !== undefined && checkread.length != 0){
                        return res.status(400).json({ success: false });
                    }


                    await read.push({ id: req.body.id, slug:  req.body.slug});

                    const insert = await Users.findOneAndUpdate(fxt, {read: read}, {
                        new: true,
                        runValidators: true
                    });
    
                    if (!insert) {
                        return res.status(400).json({ success: false });
                    }
    
                    return res.status(200).json({ success: true });

                } catch (error) {
                    return res.status(400).json({ success: false, error: error.message });
                }
                break;

               
            default:
                return res.status(400).json({ success:false });
                break;
    }
}
