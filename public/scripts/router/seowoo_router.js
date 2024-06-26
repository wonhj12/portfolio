const express = require('express');
const router = express.Router();

// seowoo.pug
router.get('/', (req, res) => {
    res.render('./seowoo/seowoo');
});

// seowoo_notes.pug
router.get('/notes', (req, res) => {
    res.render('./seowoo/seowoo_notes');
});

// seowoo_pictures.pug
router.get('/pictures', (req, res) => {
    res.render('./seowoo/seowoo_pictures');
});

module.exports = router;
