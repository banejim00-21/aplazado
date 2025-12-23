module.exports = {
  uiPort: process.env.PORT || 1880,
  mqttReconnectTime: 15000,
  serialReconnectTime: 15000,
  debugMaxLength: 1000,
  flowFile: 'flows.json',
  flowFilePretty: true,
  userDir: './',
  nodesDir: './nodes',
  
  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2b$08$XH.qYmP5KdGJLUn6PBqGp.1/4hGN2wT0T7RNJ1YJB7t7U0f2P7pu2",
      permissions: "*"
    }]
  },
  
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
  },
  
  exportGlobalContextKeys: false,
  externalModules: {}
};
