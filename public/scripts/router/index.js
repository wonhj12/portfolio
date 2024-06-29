const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'pug');

// Routers
const seowooRouter = require('./seowoo_router');
const homeRouter = require('./home_router');

app.use('/static', express.static('public')); // public 폴더 접근

// Routers
app.use('/', homeRouter);
app.use('/seowoo', seowooRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
