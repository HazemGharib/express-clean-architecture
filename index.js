import express from 'express';
import dotenv from 'dotenv';
import {
    getComments,
    notFound
} from './adapters/controllers';
import makeCallback from './adapters/common/express-callback';

dotenv.config();

const apiRoot = process.env.API_ROOT;
const app = express();
app.use(express.json());
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
});
console.log(apiRoot)
app.get(`${apiRoot}/comments`, makeCallback(getComments));
app.get(`${apiRoot}/comments/:id`, makeCallback(getComments));
app.use(makeCallback(notFound));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at : http://localhost:${port}`);
});

export default app;