import { apiClient } from '.';
import { GetChannelsResponse } from '../@types/apis/channels';

export const getChannels = async () => {
  const response = await apiClient.get<GetChannelsResponse>('/channels');

  return response.data;
};
