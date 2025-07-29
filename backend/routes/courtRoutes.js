// backend/routes/courtRoutes.js
import express from 'express';
const router=express.Router();
import {Court} from '../models/court';

// GET all courts
router.get('/', async (req, res) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single court by ID
router.get('/:id', async (req, res) => {
  try {
    const court = await Court.findById(req.params.id);
    res.json(court);
  } catch (err) {
    res.status(404).json({ message: 'Court not found' });
  }
});

module.exports = router;
