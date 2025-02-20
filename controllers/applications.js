const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Routes 
// GET /users/:userId/applications
// index route
router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);

        res.render('applications/index.ejs', {
            applications: currentUser.applications
        });
        
    } catch (e) {
        console.log(e);
        res.redirect('/');
    }
});

// GET /users/:userId/applications/new
router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
});

// POST /users/:userId/applications
router.post('/', async (req, res) => {
try {
  // Extract
  const currentUser = await User.findById(req.session.user._id);
  // Transfer
  currentUser.applications.push(req.body);
  // Load
  await currentUser.save();

  res.redirect(`/users/${currentUser._id}/applications`);
} catch (e) {
    console.log(e);
    res.redirect('/');
}


});

module.exports = router;