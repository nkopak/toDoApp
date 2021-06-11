// Update with your config settings.
import dotenv from 'dotenv';

dotenv.config();

// const pgPass: string = process.env.PG_PASS;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'to_do_app',
      user: 'postgres',
      password: process.env.PG_PASS, // <---------problem here
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
