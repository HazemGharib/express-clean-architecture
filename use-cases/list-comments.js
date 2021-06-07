// Implement business logic here 
export default function makeListComments ({ commentsDb }) {
  return async function listComments ({ id } = {}) {
    if (!id) {
      return await commentsDb.findAll();
    }
    return await commentsDb.findById({
      postId,
      omitReplies: false
    });

  }
}
