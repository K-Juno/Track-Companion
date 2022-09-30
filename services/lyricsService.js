import dbConnect from '../dbConnect';
import Lyrics from '../models/Lyrics';

export default async function getAllLyrics() {
  await dbConnect();

  const lyrics = await Lyrics.find();

  const lyricsList = lyrics.map(({ id, title, lyrics }) => {
    return { id, title, lyrics };
  });

  return lyricsList;
}

export async function getLyricsById(songId) {
  await dbConnect();

  const song = await Lyrics.findById(songId);
  const { id, title, lyrics } = song;

  return { id, title, lyrics };
}
