import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { SignupProvider } from '../signup/store/SignupContext';
import { MatchingProvider } from '../matching/store/MatchingContext';
import { AdminSignupProvider } from '../adminSignup/store/AdminSignupContext';

import StepIdPassword from '../signup/pages/StepIdPassword';
import StepBasicInfo from '../signup/pages/StepBasicInfo';
import StepCertifications from '../signup/pages/StepCertifications';
import StepOptionalInfo from '../signup/pages/StepOptionalInfo';
import StepExperienceServices from '../signup/pages/StepExperienceServices';
import StepExperienceServices_2 from '../signup/pages/StepExperienceServices_2';
import SignupComplete from '../signup/pages/SignupComplete';

import ElderlyInfo from '../matching/components/ElderlyInfo';
import AdjustForm from '../matching/components/AdjustForm';
import QualificationForm from '../matching/components/QualificationForm';
import MatchingComplete from '../matching/components/MatchingComplete';

import Home from './pages/Home';
import Login from './pages/Login';

import AdminSignupStep1 from '../adminSignup/pages/AdminSignup_IdPassword';
import AdminSignupStep2 from '../adminSignup/pages/AdminSignup_ ChoiceRole';
import AdminSignupStep3 from '../adminSignup/pages/AdminSignup_CenterDirector';
import AdminSignupStep4 from '../adminSignup/pages/AdminSignup_CenterDirector2';
import AdminSignupStep5 from '../adminSignup/pages/AdminSignup_CenterMember';
import AdminSignupComplete from '../adminSignup/pages/AdminSignup_Complete';

const CaregiverSignupLayout = () => (
  <SignupProvider>
    <Outlet />
  </SignupProvider>
);

const AdminSignupLayout = () => (
  <AdminSignupProvider>
    <Outlet />
  </AdminSignupProvider>
);

const MatchingLayout = () => (
  <MatchingProvider>
    <Outlet />
  </MatchingProvider>
);

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },

  {
    path: '/signup/caregiver',
    element: <CaregiverSignupLayout />,
    children: [
      { path: 'step1', element: <StepIdPassword /> },
      { path: 'step2', element: <StepBasicInfo /> },
      { path: 'step3', element: <StepCertifications /> },
      { path: 'step4', element: <StepOptionalInfo /> },
      { path: 'step5', element: <StepExperienceServices /> },
      { path: 'step6', element: <StepExperienceServices_2 /> },
      { path: 'complete', element: <SignupComplete /> },
    ],
  },

  {
    path: '/adminSignup',
    element: <AdminSignupLayout />,
    children: [
      { path: 'step1', element: <AdminSignupStep1 /> },
      { path: 'step2', element: <AdminSignupStep2 /> },
      { path: 'step3', element: <AdminSignupStep3 /> },
      { path: 'step4', element: <AdminSignupStep4 /> },
      { path: 'step5', element: <AdminSignupStep5 /> },
      { path: 'complete', element: <AdminSignupComplete /> },
    ],
  },

  {
    path: '/matching',
    element: <MatchingLayout />,
    children: [
      { path: 'elderly-info', element: <ElderlyInfo /> },
      { path: 'adjustment', element: <AdjustForm /> },
      { path: 'qualification', element: <QualificationForm /> },
      { path: 'completed', element: <MatchingComplete /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
