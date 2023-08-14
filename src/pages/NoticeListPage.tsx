import { useState } from 'react';
import styled from 'styled-components';

type Channel = '전체' | '5기 프론트엔드' | '5기 백엔드';

type Announcement = {
  title: string;
  channel: Channel;
  author: string;
  date: string;
};

const NoticeListPage = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel>('전체');

  const announcements: Announcement[] = [
    {
      title: '공지 1',
      channel: '전체',
      author: '제레미',
      date: '2023-08-13',
    },
    {
      title: '공지 2',
      channel: '5기 프론트엔드',
      author: '제레미',
      date: '2023-08-15',
    },
    {
      title: '공지 3',
      channel: '5기 프론트엔드',
      author: '파인',
      date: '2023-08-12',
    },
    {
      title: '공지 4',
      channel: '5기 백엔드',
      author: '도기',
      date: '2023-08-12',
    },
  ];

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
          {announcements
            .filter(
              (announcement) =>
                selectedChannel === '전체' ||
                announcement.channel === selectedChannel
            )
            .map((announcement, index) => (
              <tr key={index}>
                <td>{announcement.title}</td>
                <td>{announcement.channel}</td>
                <td>{announcement.author}</td>
                <td>{announcement.date}</td>
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
