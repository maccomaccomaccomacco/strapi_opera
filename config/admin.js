module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3b2181fd2cded514cd04f8fd499dc1c'),
  },
});
