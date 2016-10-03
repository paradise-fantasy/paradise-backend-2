const config = {};

config.postgres = {
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASS
}

config.mongodb = {
  uri: 'mongodb://localhost/paradise'
}

export default config;
