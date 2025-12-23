module.exports = {
  uiPort: process.env.PORT || 1880,
  httpAdminRoot: false,
  httpNodeRoot: '/',
  ui: { path: "ui" },
  logging: { console: { level: "error" } }
};
