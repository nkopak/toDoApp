import knex from 'knex';
require('dotenv').config({ path: '../../.env' });

const knexfile = require('./knexfile');

const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

export default knex(configOptions);
