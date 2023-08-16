import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { getNoticeList } from '../apis/notices';
import { GetNoticesResponse } from '../@types/apis/notices';

type Channel = '전체' | '5기 프론트엔드' | '5기 백엔드';

const NoticeListPage = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel>('전체');

  const { data: noticeData } = useQuery<GetNoticesResponse[]>(
    ['notices'],
    getNoticeList
  );

  return (
    <Container>
      <h1>공지 사항</h1>
      <div>
        <h2>채널</h2>
        <div>
          {(['전체', '5기 프론트엔드', '5기 백엔드'] as Channel[]).map(
            (channel) => (
              <ChannelButton
                key={channel}
                onClick={() => setSelectedChannel(channel)}>
                {channel}
              </ChannelButton>
            )
          )}
        </div>
      </div>

      <AnnouncementTable>
        <thead>
          <tr>
            <th>제목</th>
            <th>채널</th>
            <th>작성자</th>
            <th>작성 날짜</th>
          </tr>
        </thead>
        <tbody>
          {noticeData
            ?.filter(
              (notice) =>
                selectedChannel === '전체' ||
                notice.channelName === selectedChannel
            )
            .map((notice, index) => (
              <tr key={index}>
                <td>{notice.title}</td>
                <td>{notice.channelName}</td>
                <td>{notice.writer}</td>
                <td>{notice.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </AnnouncementTable>
    </Container>
  );
};

export default NoticeListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;

  width: 554px;
  height: 100vh;
`;

const ChannelButton = styled.button`
  width: 128px;
  height: 32px;
  border: none;
  border-radius: 12px;

  margin: 5px;
  padding: 10px 20px;
  background-color: #d9d9d9;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const AnnouncementTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 35%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 25%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 20%;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 20%;
  }
`;
