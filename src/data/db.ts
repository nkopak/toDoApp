import knex from 'knex';
import dotenv = require('dotenv');

dotenv.config({ path: '../../.env' });

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexfile = require('./knexfile');

const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

export default knex(configOptions);
