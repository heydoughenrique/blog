module.exports = {
  async redirects() {
    return [
      {
        source: ('/testekatiafantes'),
        destination: process.env.NOTION_KF_KATIA_FANTES,
        permanent: true,
      },
    ]
  }
}

