import dbConnect from '../../../utils/dbConnect';
import Banks from '../../../models/Banks';

dbConnect();

export default async(req, res) => {
    const { method } = req;

    switch  (method) {
      
        case 'GET':
            try{
                const banks = await Banks.find({});

                return res.status(200).json({ success: true, data: banks })
            } catch (error) {
                return res.status(400).json({ success:false });
            }
            break;
    
        default:
            return res.status(400).json({ success:false });
            break;

    }
}