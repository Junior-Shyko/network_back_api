module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3336),
      database: env('DATABASE_NAME', 'network_api'),
      user: env('DATABASE_USERNAME', 'junior'),
      password: env('DATABASE_PASSWORD', 'senha'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
