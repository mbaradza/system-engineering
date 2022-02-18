const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format:  combine(
    label({ label: 'msu-pipeline-log' }),
    timestamp(),
    myFormat),
    defaultMeta: { service: 'msu-pipeline' },
    transports: [

    new transports.File.Daily({ filename: './logs/error.log', level: 'error',maxsize: 500000 }),
    new transports.File({ filename: './logs/combined.log', maxsize: 500000 }),
  ],
});

module.exports = logger
  