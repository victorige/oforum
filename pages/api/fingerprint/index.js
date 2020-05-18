import dbConnect from '../../../utils/dbConnect';
import Fingerprints from '../../../models/Fingerprints';
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
                

                var fingerprint = await Fingerprints.findOne({ fingerprint: req.body.fingerprint });

                if (!fingerprint) {
                    await Fingerprints.create({username: req.body.username, fingerprint: req.body.fingerprint, time: new Date()});
                    return res.status(200).json({ success: true, allow: 1 });
                }

                var time = new Date(fingerprint.time);
                    var now = new Date();
                    var seconds = ((now.getTime() - time.getTime()) * .001) >> 0;
                    var minutes = seconds / 60;
                    var hours = minutes / 60;

                if(fingerprint.username != req.body.username){
                    if(hours < 24){
                        return res.status(200).json({ success: true, allow: 0 });
                    }
                    var fxt = { fingerprint: req.body.fingerprint };
                    var bodyy = {username: req.body.username, time: new Date()}

                    await Fingerprints.findOneAndUpdate(fxt, bodyy, {
                        new: true,
                        runValidators: true
                    });
                    return res.status(200).json({ success: true, allow: 1 });
                }

                if(hours > 24){
                    var fxt = { fingerprint: req.body.fingerprint };
                    var bodyy = {time: new Date()}

                    await Fingerprints.findOneAndUpdate(fxt, bodyy, {
                        new: true,
                        runValidators: true
                    });
                    return res.status(200).json({ success: true, allow: 1 });
                }

                return res.status(200).json({ success: true, allow: 1 });

            } catch (error) {
                return res.status(400).json({ success:false });
            }
            break;

    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}