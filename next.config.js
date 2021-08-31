module.exports = {
  async redirects() {
    return [
      {
        source: ('/katiafantes'),
        destination: process.env.NOTION_KF_KATIA_FANTES,
        permanent: true,
      },
      {
        source: ('/dfh'),
        destination: process.env.NOTION_DF_DENTAL_FACTORY,
        permanent: true,
      },
      {
        source: ('/ladomato'),
        destination: process.env.NOTION_LM_LA_DO_MATO,
        permanent: true,
      },
      {
        source: ('/gabrielafune'),
        destination: process.env.NOTION_GF_GABRIELA_FUNE,
        permanent: true,
      },
      {
        source: ('/laerteheredia'),
        destination: process.env.NOTION_LH_LAERTE_HEREDIA,
        permanent: true,
      },
      {
        source: ('/estudioitinerante'),
        destination: process.env.NOTION_ET_ESTUDIO_ITINERANTE,
        permanent: true,
      },
      {
        source: ('/carolragugnetti'),
        destination: process.env.NOTION_CR_CAROL_RAGUGNETTI,
        permanent: true,
      },
      {
        source: ('/hbellelingerie'),
        destination: process.env.NOTION_HB_HBELLE_LINGERIE,
        permanent: true,
      },
      {
        source: ('/gabrielameirelles'),
        destination: process.env.NOTION_GM_GABRIELA_MEIRELLES,
        permanent: true,
      },
      {
        source: ('/atelierdamente'),
        destination: process.env.NOTION_AT_ATELIER_DA_MENTE,
        permanent: true,
      },
      {
        source: ('/regessales'),
        destination: process.env.NOTION_DR_REGES_SALES,
        permanent: true,
      },
      {
        source: ('/casadosfiltros'),
        destination: process.env.NOTION_CF_CASA_DOS_FILTROS,
        permanent: true,
      },
      {
        source: ('/angelinacortinas'),
        destination: process.env.NOTION_AC_ANGELINA_CORTINAS,
        permanent: true,
      },
    ]
  }
}

