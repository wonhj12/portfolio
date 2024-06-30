require('dotenv').config();

const express = require('express');
const app = express();

// Views
app.set('view engine', 'pug');

// Router js
const seowooRouter = require('./seowoo_router');
const homeRouter = require('./home_router');

// Routers
app.use('/static', express.static('public')); // public 폴더 접근
app.use('/', homeRouter);
app.use('/seowoo', seowooRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
