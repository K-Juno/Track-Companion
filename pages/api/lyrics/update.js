import dbConnect from '../../../dbConnect';
import Lyrics from '../../../models/Lyrics';

export default async function updateHandler(req, res) {
  await dbConnect();

  if (req.method === 'PUT') {
    const { id } = req.query;

    await Lyrics.findByIdAndUpdate(id, req.body, { new: true });
    console.log(id);
    res.status(200).json({ message: 'Lyrics updated.' });
  }
}
