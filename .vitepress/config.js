export default {
  title: 'retro aol sdk',
  description: 'A sdk for P3OL',
  appearance: false,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/proxima-nova-2' }]
  ],
  themeConfig: {
    logo: '/img/logo.svg',
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/joecampo/retro-aol-sdk' },
      { icon: 'twitter', link: 'https://www.twitter.com/joecampo' },
      { icon: 'discord', link: 'https://discord.gg/reaol' }
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Events', link: '/events' },
          { text: 'API', link: '/api' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Built with 💕 in Ohio'
    }
  },
}