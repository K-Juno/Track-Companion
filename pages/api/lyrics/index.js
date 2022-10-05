import getAllLyrics from '../../../services/lyricsService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const lyrics = await getAllLyrics();

    return res.status(200).json(lyrics);
  }
}
