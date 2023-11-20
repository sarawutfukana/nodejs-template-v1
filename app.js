const express = require('express');

const app = express();
const cors = require('cors');
const Healthz = require('./routes/healthz.route');
const Exam = require('./routes/exam.route');

app.enable('trust proxy');
app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/healthz', Healthz);
app.use('/exam', Exam);

module.exports = app;
