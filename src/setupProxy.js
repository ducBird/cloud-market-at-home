const { FRONTLINE_URL } = require("./constants/URLS");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/uploads/img",
    createProxyMiddleware({
      target: FRONTLINE_URL,
      changeOrigin: true,
    })
  );
};
