import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import WorkLocationForm from './pages/work-condition/WorkLocationForm';
import WorkScheduleForm from './pages/work-condition/WorkScheduleForm';
import WorkConditionPage from './pages/work-condition/WorkConditionPage';
import WorkConditionConfirm from './pages/work-condition/WorkConditionConfirm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/work-condition',
    element: <WorkConditionPage />,
    children: [
      {
        index: true,
        path: 'location',
        element: <WorkLocationForm />,
      },
      {
        path: 'schedule',
        element: <WorkScheduleForm />,
      },
      {
        path: 'confirm',
        element: <WorkConditionConfirm />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
