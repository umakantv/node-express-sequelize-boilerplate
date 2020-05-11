require('dotenv').config();

const user =      process.env.RDS_USERNAME;
const pass =      process.env.RDS_PASSWORD;
const database =  process.env.RDS_DB_NAME;
const host =      process.env.RDS_HOSTNAME
const port =      process.env.RDS_PORT;

module.exports = {
  "development": {
    "url": process.env.DEV_DB_URL,
    "dialect": "postgres"
  },
  "test": {
    "url": process.env.TEST_DB_URL,
    "dialect": "postgres"
  },
  "production": {
    "url": `postgres://${user}:${pass}@${host}:${port}/${database}`,
    "dialect": "postgres"
  }
};