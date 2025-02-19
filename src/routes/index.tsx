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
import WorkLocationForm from './pages/caregiver/work-condition/WorkLocationForm';
import WorkScheduleForm from './pages/caregiver/work-condition/WorkScheduleForm';
import WorkConditionPage from './pages/caregiver/work-condition/WorkConditionPage';
import WorkConditionConfirm from './pages/caregiver/work-condition/WorkConditionConfirm';

import AdminSignupStep1 from '../adminSignup/pages/AdminSignup_IdPassword';
import AdminSignupStep2 from '../adminSignup/pages/AdminSignup_ChoiceRole';
import AdminSignupStep3 from '../adminSignup/pages/AdminSignup_CenterDirector';
import AdminSignupStep4 from '../adminSignup/pages/AdminSignup_CenterDirector2';
import AdminSignupStep5 from '../adminSignup/pages/AdminSignup_CenterMember';
import AdminSignupComplete from '../adminSignup/pages/AdminSignup_Complete';
import CareGiverMain from './pages/caregiver/CareGiverMain';
import CareGiverLayout from './pages/caregiver/CareGiverLayout';
import SeniorRegisterLayout from './pages/center/senior/register/SeniorRegisterLayout';
import SeniorRegisterBaseInfo from './pages/center/senior/register/SeniorRegisterBaseInfo';
import SeniorRegisterLocation from './pages/center/senior/register/SeniorRegisterLocation';
import SeniorRegisterCareTIme from './pages/center/senior/register/SeniorRegisterCareTIme';
import SeniorRegisterCareService from './pages/center/senior/register/SeniorRegisterCareService';
import WorkConditionComplete from './pages/caregiver/work-condition/WorkConditionComplete';

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

  // 요양 보호사
  {
    path: '/caregiver',
    element: <CareGiverLayout />,
    children: [
      {
        index: true,
        element: <CareGiverMain />,
      },
      {
        path: 'work-conditions',
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
          {
            path: 'complete',
            element: <WorkConditionComplete />,
          },
        ],
      },
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

  // 관리자
  {
    path: '/center',
    // element -> 이 자리에는 공통 레이아웃 컴포넌트가 들어갑니다 ! 필요없으시면 주석 삭제 해주세요 !
    children: [
      {
        index: true,
        element: <Home />, // 이 자리에는 관리자용 메인페이지가 들어갑니다 !
      },
      {
        path: 'senior/register', // 어르신 등록 페이지
        element: <SeniorRegisterLayout />,
        children: [
          {
            path: 'basic-info',
            element: <SeniorRegisterBaseInfo />,
          },
          {
            path: 'location',
            element: <SeniorRegisterLocation />,
          },
          {
            path: 'care-time',
            element: <SeniorRegisterCareTIme />,
          },
          {
            path: 'care-service',
            element: <SeniorRegisterCareService />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
