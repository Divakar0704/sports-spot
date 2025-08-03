import express from 'express';
import User from '../models/User.js';
// import loginUsers from '../models/User';
import bcrypt from 'bcrypt';
import passport from 'passport';

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'User already exists' });

    // Inside /signup route:
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, userType });
    // const newUser = new User({ email, password, userType });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      userType: user.userType,
      email: user.email
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login', session: false }),
  (req, res) => {
    const { email, userType } = req.user;
    // Redirect to frontend with query params (or replace with JWT later)
    res.redirect(`http://localhost:5173/oauth-success?email=${email}&userType=${userType}`);
  }
);

export default router;