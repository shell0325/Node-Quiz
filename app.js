const express = require('express');
const app = express();
const port = 3000;
const Router = express.Router();
const test = require('./routes/test')


app.use('/',test)

app.set('view engine', 'ejs');

app.listen(port, () => console.info(`App listening on port:${port}`));
