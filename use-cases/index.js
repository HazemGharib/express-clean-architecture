import makeListComments from './list-comments';
import commentsDb from '../adapters/data-access';

const listComments = makeListComments({ commentsDb });

const commentService = Object.freeze({
  listComments
});

export default commentService;
export { listComments };
