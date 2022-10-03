import dbConnect from '../../../dbConnect';
import Lyrics from '../../../models/Lyrics';

export default async function createHandler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const data = req.body;

    await Lyrics.create(data);

    res.status(201).json({ message: 'Lyrics created.' });
  }
}
