import { rest } from 'msw';
import { GetChannelsResponse } from '../../@types/apis/channels';

export const channelsHandlers = [
  rest.get('/channels', (_, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(200),
      ctx.json<GetChannelsResponse>({
        channels: [
          {
            channelName: '5기-공지사항',
            channelId: 'Abc123',
          },
          {
            channelName: '5기-잠실캠퍼스',
            channelId: 'jamsil123',
          },
        ],
      })
    );
  }),
];
