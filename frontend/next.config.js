module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coffees',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [process.env.IMAGE_HOST],
  },
}
