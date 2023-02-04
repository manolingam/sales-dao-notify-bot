const dotenv = require('dotenv');

dotenv.config();

const SECRETS = {
  TOKEN: process.env.TOKEN,
  GUILD_ID: process.env.GUILD_ID,
  OFFERS_SUBMISSION_CHANNEL_ID: process.env.OFFERS_SUBMISSION_CHANNEL_ID,
  MEMBERSHIP_SUBMISSIONS_CHANNEL_ID:
    process.env.MEMBERSHIP_SUBMISSIONS_CHANNEL_ID,
  JWT_SECRET: process.env.JWT_SECRET
};

module.exports = { SECRETS };
