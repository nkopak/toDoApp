import knex from 'knex';
import dotenv from 'dotenv';

const knexfile = require('./knexfile');
dotenv.config();

// const env = process.env.NODE_ENV || 'development'; // <------problem here
const env = 'development';
const configOptions = knexfile[env];

export default knex(configOptions);
