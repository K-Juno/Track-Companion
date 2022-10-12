import dbConnect from '../dbConnect';
import Audio from '../models/Audio';

export default async function getAllAudio() {
  await dbConnect();

  const audio = await Audio.find();
  const audioList = audio.map(({ id, src }) => {
    return { id, src };
  });

  return audioList;
}

export async function getAudioById(audioId) {
  await dbConnect();

  const audioFile = await Audio.find({ id: audioId });
  const { id, src } = audioFile;

  return { id, src };
}
