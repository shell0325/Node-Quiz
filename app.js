const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(indexRouter);

app.use(bodyParser.json());

app.listen(port, () => console.info(`App listening on port:${port}`));
