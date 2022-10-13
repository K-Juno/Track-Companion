import { getAllLyrics } from '../../../services/lyricsService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const cards = await getAllLyrics();
    return response.status(200).json(cards);
  }
}
