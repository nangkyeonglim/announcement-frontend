import { channelsHandlers } from './handlers/channels';
import { noticesHandlers } from './handlers/notices';

export const handlers = [...channelsHandlers, ...noticesHandlers];
