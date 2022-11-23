module.exports = ({ env }) => ({
    url: env("RENDER_EXTERNAL_URL"),
    dirs: {
      public: "/data/public"
    },
    auth: {
    secret: ${process.env.JWT_KEY}
    }
  });