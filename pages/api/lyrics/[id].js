import dbConnect from '../../../dbConnect';
import Lyrics from '../../../models/Lyrics';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.query;

    await Lyrics.findByIdAndDelete(id);

    res.status(200).json({ message: 'Lyrics deleted.' });
  }

  if (req.method === 'PUT') {
    const { id } = req.query;

    await Lyrics.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Lyrics updated.' });
  }
}
