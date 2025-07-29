import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // optional if doing OAuth later
  role: { type: String, enum: ['player', 'owner', 'admin'], default: 'player' }
});

export default mongoose.model('User', userSchema);