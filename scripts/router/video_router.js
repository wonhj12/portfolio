const express = require('express');
const router = express.Router();

// home.pug
router.get('/', (req, res) => {
    res.render('./video/video');
});

module.exports = router;
