import dbConnect from '../../../dbConnect';
import Audio from '../../../models/Audio';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.query;

    await Audio.findByIdAndDelete(id);

    res.status(200).json({ message: 'Audio deleted.' });
  }
}
