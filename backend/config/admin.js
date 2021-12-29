module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cd2c8b0dd0df01cc23c35adfd7030200'),
  },
});
