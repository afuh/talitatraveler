const siteUrl = 'https://talitatraveler.netlify.com' // no trailing slash

const mainNav = [
  { name: 'Inicio', path: '/' },
  { name: "Categorías", path: '/categorias' },
  { name: "Sobre mí", path: '/sobre-mi' }
]

module.exports = {
  title: 'Talita Traveler',
  titleTemplate: '%s',
  description: "Desde otro lado.",
  siteUrl,
  image: '/images/cover-1440x720.jpg',
  themeColor: '#000',
  backgroundColor: '#fff',
  email: 'talita@talitatraveler.com',
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
