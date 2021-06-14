// Update with your config settings.
require('dotenv').config({ path: '../../.env' });
import './env';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'to_do_app',
      user: 'postgres',
      password: process.env.PG_PASS,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

  testing: {
    client: 'pg',
    connection: 'to_do_app',
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

  production: {
    client: 'pg',
    connection: 'to_do_app',
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },
};
