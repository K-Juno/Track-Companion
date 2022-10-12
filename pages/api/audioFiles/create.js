import dbConnect from '../../../dbConnect';
import Audio from '../../../models/Audio';

export default async function createHandler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const data = req.body;

    const createdAudio = await Audio.create(data);

    res.status(201).json(createdAudio);
  }
}
