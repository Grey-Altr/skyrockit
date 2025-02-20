const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Routes 
// GET /users/:userId/applications
// index route
router.get('/', async (req, res) => {
    try {
        res.render('applications/index.ejs');
    } catch (e) {
        console.log(e);
        res.redirect('/');
    }
});

// GET /users/:userId/applications/new
router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
});


module.exports = router;