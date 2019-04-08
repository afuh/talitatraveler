const siteUrl = 'https://talitatraveler.com' // no trailing slash

const mainNav = [
  { name: 'Inicio', path: '/' },
  { name: "Categorías", path: '/categorias' },
  { name: "Sobre mí", path: '/sobre-mi' }
]

module.exports = {
  title: 'talita traveler',
  description: "todo lo que escribo y considero ser digno de ser publicado.",
  siteUrl,
  image: '/images/cover-720x360.jpg',
  icon: 'src/assets/avatar-512x512.png',
  themeColor: '#008080',
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
