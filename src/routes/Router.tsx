import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import WriteNoticePage from '../pages/WriteNoticePage';
import NoticeDetailPage from '../pages/NoticeDetailPage';
import NoticeListPage from '../pages/NoticeListPage';

export const Router = () => {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <App />,
      children: [
        {
          path: '',
          element: <NoticeListPage />,
        },
        {
          path: 'notice/:noticeId',
          element: <NoticeDetailPage />,
        },
        {
          path: 'write/notice',
          element: <WriteNoticePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouter} />;
};
