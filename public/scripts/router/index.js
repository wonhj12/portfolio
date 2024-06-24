const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'pug');

// Routers
const seowooRouter = require('./seowoo_router');

app.use('/static', express.static('public'));
app.use('/seowoo', seowooRouter);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
