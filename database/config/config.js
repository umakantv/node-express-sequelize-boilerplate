require('dotenv').config();

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
    "url": process.env.DB_URL,
    "dialect": "postgres"
  }
};