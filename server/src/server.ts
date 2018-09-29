import app from './app';

const PORT_NUMBER = 8000;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});
