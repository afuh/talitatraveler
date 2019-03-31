export const timeToRead = num => num + (num === 1 ? " minuto" : " minutos") + " de lectura"

export const categoryToSlug = category => category
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/ /g, '-')

export const searchWord = (search, post) => {
  const searchIn = post => Object.values(post).map(value => normalize(value))

  const normalize = str => str && str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")

  const res = searchIn({
    title: post.title,
    subTitle: post.subTitle,
    content: post.content.text
  })

  return res.some(str => RegExp('\\b' + normalize(search), "i").test(str))
}
