export const timeToRead = num => num + (num === 1 ? " minuto" : " minutos") + " de lectura"

export const categoryToSlug = category => category
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/ /g, '-')
