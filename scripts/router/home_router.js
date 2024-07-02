const express = require('express');
const router = express.Router();

// home.pug
router.get('/', (req, res) => {
    res.render('./home/home');
});

// 노션 2024 설교요약 페이지 리디렉트
router.get('/church', (req, res) => {
    res.redirect(
        'https://toroto.notion.site/2024-a062af0c20fc4c61b7ccb5c4567f8a7b?pvs=4'
    );
});

module.exports = router;
