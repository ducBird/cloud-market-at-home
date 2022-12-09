const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/uploads/img",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );
};
