import mongoose from 'mongoose';

const { Schema } = mongoose;
const audioSchema = new Schema({
  id: { type: String, required: true },
  src: { type: String, required: true },
});

const Audio = mongoose.models.Audio || mongoose.model('Audio', audioSchema);

export default Audio;
