module.exports = {
  checkUrl: url => url.match(/^https/i) ? url : "https:" + url,
  toSlug: str => str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, '-')
}
