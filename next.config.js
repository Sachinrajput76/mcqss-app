const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/mcqss-app' : '',
  assetPrefix: isProd ? '/mcqss-app' : '',
};
