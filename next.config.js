const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/mcqs-app' : '',
  assetPrefix: isProd ? '/mcqs-app/' : '',
};
