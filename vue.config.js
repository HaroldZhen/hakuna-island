module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hakuna-island/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'HAKUNA ISLAND',
    },
  },
};
