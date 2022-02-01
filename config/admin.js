module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dbed5176eabbf3a9645c480b67280f99'),
  },
});
