// Add data access logic here
export default function makeCommentsDb ({ makeDb }) {
  return Object.freeze({
    findAll,
    findById
  })
  async function findAll ({ publishedOnly = true } = {}) {
    const db = await makeDb()
    const query = publishedOnly ? { published: true } : {}
    const result = await db.collection('comments').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('comments').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
}
