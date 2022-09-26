import mongoose from 'mongoose';

const { Schema } = mongoose;
const lyricsSchema = new Schema({
  title: { type: String, required: true },
  lyrics: { type: String, required: true },
});

const Lyrics = mongoose.models.Lyrics || mongoose.model('Lyrics', lyricsSchema);

export default Lyrics;
