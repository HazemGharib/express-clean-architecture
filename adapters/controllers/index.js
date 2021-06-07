import {
  listComments,
} from '../../use-cases'
import makeGetComments from './get-comments'
import notFound from './not-found'

const getComments = makeGetComments({ listComments });

const commentsController = Object.freeze({
  getComments,
  notFound,
});

export default commentsController;
export { getComments, notFound };
  