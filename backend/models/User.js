import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  userType: { type: String, enum: ['player', 'courtOwner', 'admin'], required: true },
  googleId: String,
});

export default mongoose.model('User', userSchema);