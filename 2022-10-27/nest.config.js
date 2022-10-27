module.exports = {
  env: {
    customKey: 'Test Next Config',
  },
  async rewrites() {
    return (
      {
        source: '/about/:slug',
        destination: '/',
        has: [{type: 'query', key: 'test', value: 'rewrite'}],
      }
    )
  }
}