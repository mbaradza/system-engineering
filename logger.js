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

    new transports.File({ filename: '/var/log/msu-pipeline/error.log', level: 'error',maxsize: 500000 }),
    new transports.File({ filename: '/var/log//msu-pipeline/combined.log', maxsize: 500000 }),
  ],
});

module.exports = logger
  