module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c1a9e7726729bc7bd7a94ef600a663a6'),
    },
  },
});
