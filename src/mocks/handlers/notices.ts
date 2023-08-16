import { rest } from 'msw';
import { noticeData } from '../data/notice';

export const noticesHandlers = [
  rest.post('/notices', (req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(201),
      ctx.set('Location', `/notices/200`)
    );
  }),
  rest.get('/notices/:noticeId', (_, res, ctx) => {
    return res(ctx.json(noticeData));
  }),
];
