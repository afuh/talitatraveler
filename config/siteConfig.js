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
  nav: [
    ...mainNav
  ],
  footerNav: [
    ...mainNav,
    { name: "Contacto", path: '/contacto' },
    { name: "rss", path: siteUrl + '/rss.xml', external: true }
  ]
}
