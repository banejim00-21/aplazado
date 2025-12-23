module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: 'flows.json',
  userDir: './',
  
  httpAdminRoot: '/admin',
  httpNodeRoot: '/',
  ui: { path: "ui" },
  
  functionGlobalContext: {},
  
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
