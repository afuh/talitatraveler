module.exports = {
  checkUrl: (url) => (url.match(/^https/i) ? url : 'https:' + url),
}
