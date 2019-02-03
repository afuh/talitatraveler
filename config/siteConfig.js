const siteUrl = 'https://talitatraveler.netlify.com'

const mainNav = [
  { name: 'Inicio', path: '/' },
  { name: "Categorías", path: '/categorias' },
  { name: "Sobre mi", path: '/sobre-mi' }
]

module.exports = {
  title: 'Talita traveler',
  titleTemplate: '%s | Talita traveler',
  description: "Desde otro lado.",
  siteUrl, // no trailing slash
  favicon: '/images/icon-32x32.png',
  image: '/images/cover-1440x720.jpg',
  themeColor: '#000',
  backgroundColor: '#fff',
  external: [
    { name: "Facebook", url: 'https://www.facebook.com/talitraveler' },
    { name: "Twitter", url: 'https://twitter.com/talita_traveler' },
    { name: "Github", url: 'https://github.com/afuh/talitatraveler' },
    { name: "rss", url: siteUrl + '/rss.xml' }
  ],
  nav: [
    ...mainNav
  ],
  footerNav: [
    ...mainNav,
    { name: "Contacto", path: '/contacto' },
    { name: "Buscar", path: '/categorias' }
  ]
}
