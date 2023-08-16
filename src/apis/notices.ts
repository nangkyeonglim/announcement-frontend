import { apiClient } from '.';
import { GetNoticesResponse } from '../@types/apis/notices';
import type { Notice } from '../@types/domain';

export const addNotice = async (newNotice: Notice) => {
  const response = await apiClient.post<void>('/notices', newNotice);

  return response.data;
};

export const getNoticeList = async () => {
  const response = await apiClient.get<GetNoticesResponse[]>('/notices');

  return response.data;
};
