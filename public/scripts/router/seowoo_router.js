const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./seowoo/seowoo');
});
router.get('/notes', (req, res) => {
    res.render('./seowoo/seowoo_notes');
});

module.exports = router;
