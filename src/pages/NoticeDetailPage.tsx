import { useQuery } from '@tanstack/react-query';
import { GetNoticeResponse } from '../@types/apis/notices';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotice } from '../apis/notices';
import { styled } from 'styled-components';

const NoticeDetailPage = () => {
  const noticeId = Number(useParams()['noticeId']);
  const navigate = useNavigate();

  const { data: notice } = useQuery<GetNoticeResponse>(
    ['notice', noticeId],
    () => getNotice(noticeId)
  );

  const goNoticesPage = () => {
    navigate('/');
  };

  if (!notice) return null;

  return (
    <Container>
      <Title>{notice.title}</Title>
      <NoticeInfoContainer>
        <div>{notice.channelName}</div>
        <div>{notice.createdAt}</div>
        <div>{notice.writer}</div>
      </NoticeInfoContainer>
      <Content>{notice.content}</Content>
      <Button onClick={goNoticesPage}>목록 보기</Button>
    </Container>
  );
};

export default NoticeDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 554px;
`;

const Title = styled.h1`
  width: 100%;
  margin: 0;
  padding: 1.2rem 0;
  text-align: center;
  font-size: 1.2rem;
`;

const NoticeInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding-bottom: 1.2rem;
  border-bottom: 1px solid #d9d9d9;
`;

const Content = styled.div`
  white-space: pre-line;
`;

const Button = styled.button`
  width: 128px;
  height: 32px;
  border: none;
  border-radius: 12px;
  align-self: flex-end;

  background-color: #333;
  color: #fff;

  cursor: pointer;
`;
