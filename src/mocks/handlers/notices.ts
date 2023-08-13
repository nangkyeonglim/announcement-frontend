import { rest } from 'msw';

export const noticesHandlers = [
  rest.post('/notices', (req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(201),
      ctx.set('Location', `/notices/200`)
    );
  }),
];
