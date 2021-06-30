import knex from 'knex';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const knexfile = require('./knexfile');

const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];
export const db = knex(configOptions);

// export default db;
