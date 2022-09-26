import dbConnect from '../dbConnect';
import Lyrics from '../../models/Lyrics';

export default async function getAllLyrics() {
  await dbConnect();

  const lyrics = await Lyrics.find();

  const lyricsList = lyrics.map(({ id, title, lyrics }) => {
    return { id, title, lyrics };
  });

  return lyricsList;
}
