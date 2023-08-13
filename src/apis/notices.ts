import { apiClient } from '.';
import type { Notice } from '../@types/domain';

export const addNotice = async (newNotice: Notice) => {
  const response = await apiClient.post<void>('/notices', newNotice);

  return response.data;
};
