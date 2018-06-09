import express from 'express';
import db from './models';

var app = express();

const PORT_NUMBER = 8000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});
