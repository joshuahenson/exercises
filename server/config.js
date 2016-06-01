const config = {
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/poll',
  port: process.env.PORT || 8000,
};

export default config;
