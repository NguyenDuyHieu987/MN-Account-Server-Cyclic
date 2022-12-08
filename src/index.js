const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();

const route = require('./routes');
const db = require('./config/db');

// db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

route(app);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port: ${port}`);
});
