import { useMutation, useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import type { GetChannelsResponse } from '../@types/apis/channels';
import { getChannels } from '../apis/channels';
import { addNotice } from '../apis/notices';
import { ChangeEvent, useEffect, useState } from 'react';
import { Notice } from '../@types/domain';

const WriteNoticePage = () => {
  const [noticeInfo, setNoticeInfo] = useState<Notice>({
    writer: '',
    title: '',
    content: '',
    channelId: '',
  });

  const { data: channelsData } = useQuery<GetChannelsResponse>({
    queryKey: ['channels'],
    queryFn: getChannels,
  });

  const addNoticeMutation = useMutation({
    mutationFn: addNotice,
    onSuccess: () => alert('공지가 등록되었습니다.'),
  });

  const submitNotice = () => {
    addNoticeMutation.mutate(noticeInfo);
  };

  const changeNoticeInfo =
    (key: string) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setNoticeInfo((prev) => ({ ...prev, [key]: e.target.value }));
    };

  useEffect(() => {
    if (channelsData) {
      setNoticeInfo((prev) => ({
        ...prev,
        channelId: channelsData.channels[0].channelId,
      }));
    }
  }, [channelsData]);

  return (
    <WritePage>
      <TitleInput placeholder='제목' onChange={changeNoticeInfo('title')} />
      <WritingInfoContainer>
        <SelectBox onChange={changeNoticeInfo('channelId')}>
          {channelsData?.channels.map(({ channelId, channelName }) => (
            <option key={channelId} value={channelId}>
              {channelName}
            </option>
          ))}
        </SelectBox>
        <WriterInput
          placeholder='작성자'
          onChange={changeNoticeInfo('writer')}
        />
      </WritingInfoContainer>
      <ContentTextarea
        placeholder='내용을 입력하세요.'
        onChange={changeNoticeInfo('content')}
      />
      <Button onClick={submitNotice}>등록하기</Button>
    </WritePage>
  );
};

export default WriteNoticePage;

const WritePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 554px;
`;

const WritingInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  border: none;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 64px;

  border-radius: 12px;
  border: none;

  padding: 16px;

  font-size: 32px;

  background-color: #d9d9d9;

  box-sizing: border-box;
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 12px;

  padding: 16px;

  background-color: #d9d9d9;

  box-sizing: border-box;
`;

const SelectBox = styled.select`
  width: 128px;
  height: 32px;
  border: none;
  border-radius: 12px;

  padding: 0 4px;

  background-color: #d9d9d9;
`;

const WriterInput = styled.input`
  width: 128px;
  height: 32px;
  border: none;
  border-radius: 12px;

  background-color: #d9d9d9;

  padding: 0 8px;

  box-sizing: border-box;
`;

const Button = styled.button`
  width: 128px;
  height: 32px;
  border: none;
  border-radius: 12px;
  align-self: flex-end;

  background-color: #d9d9d9;

  cursor: pointer;
`;
