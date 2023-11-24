const { format, createLogger, transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = (vendor) => new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%--${process.env.APP_NAME}-${vendor}.log`,
  datePattern: 'YYYY-MM-DD',
});

const logger = function logger(vendor, id) {
  return createLogger({
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss.SSS',
      }),
      format.printf((info) => `${info.timestamp} ${process.env.APP_NAME} ${vendor} ${id} ${info.level}: ${info.message}`),
    ),
    transports: [
      new transports.Console({
        level: 'info',
        format: format.combine(
          format.colorize(),
          format.printf(
            (info) => `${info.timestamp} ${process.env.APP_NAME} ${vendor} ${id} ${info.level}: ${info.message}`,
          ),
        ),
      }),
      dailyRotateFileTransport(vendor),
    ],
  });
};

exports.logger = logger;
