// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'minhasenha',
    database : 'hospitalmaidana'
  }
  },

    migrations: {
      directory: "./database/migrations"
    }
  

};
