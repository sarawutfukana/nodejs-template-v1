require('dotenv').config();

const app = require('./app');

const port = process.env.APP_PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    console.error(`Server start fail: ${error}`);
  } else {
    console.log(`App running in port ${port}`);
  }
});
