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
    // loader: 'imgix',
    // path: [process.env.NEXT_PUBLIC_AWS_BUCKET_PATH],
  },
}
