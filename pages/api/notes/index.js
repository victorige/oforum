import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';

dbConnect();

export default async(req, res) => {
    const { method } = req;

    switch  (method) {
        case 'GET':
            try{
                const notes = await Note.find({});

                return res.status(200).json({ success: true, data: notes })
            } catch (error) {
                return res.status(400).json({ success:false });
            }
            break;

        case 'POST':
            try{
                    const notes = await Note.create(req.body);
    
                    return res.status(201).json({ success: true, data: notes })
                } catch (error) {
                    return res.status(400).json({ success:false });
                }
                break;
    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}