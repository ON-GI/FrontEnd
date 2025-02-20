import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { SignupProvider } from '../signup/store/SignupContext';
import { MatchingProvider } from '../matching/store/MatchingContext';
import { AdminSignupProvider } from '../adminSignup/store/AdminSignupContext';
import React from 'react';

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

import AdminMainPages from '../adminPages/pages/Admin_MainPage';
import AdminMatchingInfo from '../adminPages/pages/Admin_MatchingInfo';
import AdminMatchingFiltering from '../adminPages/pages/Admin_MatchingFiltering';

import Step1 from '../adminMatching/pages/Step1';
import Step2 from '../adminMatching/pages/Step2';
import Step3 from '../adminMatching/pages/Step3';
import Search from '../adminMatching/pages/Search';
import Step5 from '../adminMatching/pages/Step5';
import Step6 from '../adminMatching/pages/Step6';
import Step7 from '../adminMatching/pages/Step7';
import Complete from '../adminMatching/pages/Complete';
import WorkConditionComplete from './pages/caregiver/work-condition/WorkConditionComplete';
import CareGiverLayout from './pages/caregiver/CareGiverLayout';
import CareGiverMain from './pages/caregiver/CareGiverMain';
import SeniorRegisterLayout from './pages/center/senior/register/SeniorRegisterLayout';
import SeniorRegisterBaseInfo from './pages/center/senior/register/SeniorRegisterBaseInfo';
import SeniorRegisterLocation from './pages/center/senior/register/SeniorRegisterLocation';
import SeniorRegisterCareTIme from './pages/center/senior/register/SeniorRegisterCareTIme';
import SeniorRegisterCareService from './pages/center/senior/register/SeniorRegisterCareService';
import SeniorRegisterNursingGrade from './pages/center/senior/register/SeniorRegisterNursingGrade';
import SeniorRegisterSymptoms from './pages/center/senior/register/SeniorRegisterSymptoms';
import SeniorRegisterCohabitant from './pages/center/senior/register/SeniorRegisterCohabitant';
import SeniorRegisterStaffContact from './pages/center/senior/register/SeniorRegisterStaffContact';
import SeniorInfoPage from './pages/center/senior/SeniorInfoPage';
import SeniorDetailInfoPage from './pages/center/senior/SeniorDetailInfoPage';
import SeniorRegisterComplete from './pages/center/senior/register/SeniorRegisterComplete';
import MatchingResult from './pages/center/matching/MatchingResult';
import MatchingCondition from './pages/center/matching/MatchingCondition';
import MatchingCoordinate from './pages/center/matching/MatchingCoordinate';
import MatchingResultComplete from './pages/center/matching/MatchingResultComplete';
import MatchingFailed from './pages/center/matching/MatchingFailed';
import MatchingResultCoordinate from './pages/center/matching/MatchingResultCoordinate';
import MatchingResultCoordinateComplete from './pages/center/matching/MatchingResultCoordinateComplete';

const CaregiverLayout = () => (
  <SignupProvider>
    <Outlet />
  </SignupProvider>
);

const CenterLayout = () => (
  <AdminSignupProvider>
    <Outlet />
  </AdminSignupProvider>
);

const CaregiverMatchingLayout = () => (
  <MatchingProvider>
    <Outlet />
  </MatchingProvider>
);

const CenterPagesLayout = () => <Outlet />;

const AdminMatchingLayout = () => <Outlet />;

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  {
    // 회원가입
    path: '/signup',
    children: [
      {
        // 요양보호사 회원가입
        path: 'caregiver',
        element: <CaregiverLayout />,
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
        // 관리자 회원가입
        path: 'center',
        element: <CenterLayout />,
        children: [
          { path: 'step1', element: <AdminSignupStep1 /> },
          { path: 'step2', element: <AdminSignupStep2 /> },
          { path: 'step3', element: <AdminSignupStep3 /> },
          { path: 'step4', element: <AdminSignupStep4 /> },
          { path: 'step5', element: <AdminSignupStep5 /> },
          { path: 'complete', element: <AdminSignupComplete /> },
        ],
      },
    ],
  },
  // 요양 보호사
  {
    path: '/caregiver',
    element: <CareGiverLayout />,
    children: [
      {
        // 요양 보호사 메인페이지
        index: true,
        element: <CareGiverMain />,
      },
      {
        // 요양 보호사 근무조건 등록
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
      {
        // 확인하지 않은 매칭 목록
        path: 'unconfirmed-matching',
        element: <AdminMatchingInfo />,
      },
      {
        // 매칭 요청 목록 조회 (이미 확인한 매칭)
        path: 'matching',
        element: <CaregiverMatchingLayout />,
        children: [
          {
            index: true,
            element: <AdminMatchingFiltering />,
          },
          { path: 'elderly-info', element: <ElderlyInfo /> },
          { path: 'adjustment', element: <AdjustForm /> },
          { path: 'qualification', element: <QualificationForm /> },
          { path: 'completed', element: <MatchingComplete /> },
        ],
      },
    ],
  },

  {
    // 관리자 페이지
    path: '/center',
    element: <CenterPagesLayout />,
    children: [
      {
        // 기본 관리자 메인 페이지
        index: true,
        element: <AdminMainPages />,
      },
      {
        path: 'senior',
        element: <SeniorInfoPage />,
      },
      {
        path: 'senior/:id',
        element: <SeniorDetailInfoPage />,
      },
      {
        // 어르신 등록 페이지
        path: 'senior/register',
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
          {
            path: 'nursing-grade',
            element: <SeniorRegisterNursingGrade />,
          },
          {
            path: 'symptoms',
            element: <SeniorRegisterSymptoms />,
          },
          {
            path: 'cohabitant',
            element: <SeniorRegisterCohabitant />,
          },
          {
            path: 'staff-contact',
            element: <SeniorRegisterStaffContact />,
          },
          {
            path: 'complete',
            element: <SeniorRegisterComplete />,
          },
        ],
      },
      {
        path: 'matching',
        children: [
          {
            index: true,
            element: <Step1 />,
          },
          {
            path: 'step2',
            element: <Step2 />,
          },
          {
            path: 'step3',
            element: <Step3 />,
          },
          {
            path: 'search',
            element: <Search />,
          },
          {
            path: 'step5',
            element: <Step5 />,
          },
          {
            path: 'step6',
            element: <Step6 />,
          },
          {
            path: 'step7',
            element: <Step7 />,
          },
          {
            path: 'complete',
            element: <Complete />,
          },
        ],
      },
      {
        path: 'matching/result',
        element: <MatchingResult />,
        children: [
          {
            path: '',
          },
        ],
      },
      {
        path: 'matching/condition',
        element: <MatchingCondition />,
      },
      {
        path: 'matching/condition/coordinate',
        element: <MatchingCoordinate />,
      },
      {
        path: 'matching/result/coordinate',
        element: <MatchingResultCoordinate />,
      },
      {
        path: 'matching/result/coordinate/complete',
        element: <MatchingResultCoordinateComplete />,
      },
      {
        path: 'matching/result/complete',
        element: <MatchingResultComplete />,
      },
      {
        path: 'matching/result/failed',
        element: <MatchingFailed />,
      },
    ],
  },
]);

// `RouterProvider`로 전체 라우트 적용
export default function Router() {
  return <RouterProvider router={router} />;
}
