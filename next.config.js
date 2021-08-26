module.exports = {
  async redirects() {
    return [
      {
        source: ('/kf', '/katiafantes, /katia_fantes, /katia-fantes'),
        destination: process.env.NOTION_KF_KATIA_FANTES,
        permanent: true,
      },
    ]
  },
}