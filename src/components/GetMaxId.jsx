import pictures from '../pictures'

export default function getMaxId() {
  let maxId = pictures[0].id
  pictures.forEach((picture) => {
    if (picture.id > maxId) {
      maxId = picture.id
    }
  })
  return maxId
}
