module.exports = ({ env }) => ({
    url: env("RENDER_EXTERNAL_URL"),
    dirs: {
      public: "/data/public"
    },
    auth: {
      secret: env(JWT_SECRET)
    }
  });