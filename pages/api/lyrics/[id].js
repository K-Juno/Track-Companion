import dbConnect from '../../../dbConnect';
import Lyrics from '../../../models/Lyrics';

export default async function removeHandler(req, res) {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.query;

    await Lyrics.findByIdAndDelete(id);

    res.status(200).json({ message: 'Lyrics deleted.' });
  }
}
