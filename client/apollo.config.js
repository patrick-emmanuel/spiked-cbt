module.exports = {
    client: {
      addTypename: true,
      includes: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.jsx'
      ],
      name: 'cbt',
      service: {
        url: 'http://api:4000/graphql',
        name: 'starter'
      }
    }
  };