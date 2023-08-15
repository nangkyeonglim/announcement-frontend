import { apiClient } from '.';
import { GetNoticeResponse } from '../@types/apis/notices';
import type { Notice } from '../@types/domain';

export const addNotice = async (newNotice: Notice) => {
  const response = await apiClient.post<void>('/notices', newNotice);

  return response.data;
};

export const getNotice = async (noticeId: number) => {
  const response = await apiClient.get<GetNoticeResponse>(
    `/notices/${noticeId}`
  );

  return response.data;
};
