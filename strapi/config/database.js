module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    // connection: {
    //   host: env('DATABASE_HOST', 'ntg-postgresql.postgres.database.azure.com'),
    //   port: env.int('DATABASE_PORT', 5432),
    //   database: env('DATABASE_NAME', 'ntgweb'),
    //   user: env('DATABASE_USERNAME', 'ntgweb@ntg-postgresql'),
    //   password: env('DATABASE_PASSWORD', 'ntgweb'),
    //   ssl: env.bool('DATABASE_SSL', false),
    // },
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ntgweb'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Botay26..'),
      ssl: env.bool('DATABASE_SSL', false)
    }
  }
})
