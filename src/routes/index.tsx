import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignupProvider } from '../signup/store/SignupContext';
import { MatchingProvider } from '../matching/store/MatchingContext';

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

const router = createBrowserRouter([
  {
    path: '/signup/caregiver/step1',
    element: (
      <SignupProvider>
        <StepIdPassword />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/caregiver/step2',
    element: (
      <SignupProvider>
        <StepBasicInfo />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/caregiver/step3',
    element: (
      <SignupProvider>
        <StepCertifications />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/caregiver/step4',
    element: (
      <SignupProvider>
        <StepOptionalInfo />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/caregiver/step5',
    element: (
      <SignupProvider>
        <StepExperienceServices />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/caregiver/step6',
    element: (
      <SignupProvider>
        <StepExperienceServices_2 />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/caregiver/complete',
    element: (
      <SignupProvider>
        <SignupComplete />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/step1',
    element: (
      <SignupProvider>
        <StepIdPassword />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/step2',
    element: (
      <SignupProvider>
        <StepBasicInfo />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/step3',
    element: (
      <SignupProvider>
        <StepCertifications />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/step4',
    element: (
      <SignupProvider>
        <StepOptionalInfo />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/step5',
    element: (
      <SignupProvider>
        <StepExperienceServices />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/step6',
    element: (
      <SignupProvider>
        <StepExperienceServices_2 />
      </SignupProvider>
    ),
  },
  {
    path: '/signup/admin/complete',
    element: (
      <SignupProvider>
        <SignupComplete />
      </SignupProvider>
    ),
  },

  {
    path: '/matching/elderly-info',
    element: (
      <MatchingProvider>
        <ElderlyInfo />
      </MatchingProvider>
    ),
  },
  {
    path: '/matching/adjustment',
    element: (
      <MatchingProvider>
        <AdjustForm />
      </MatchingProvider>
    ),
  },
  {
    path: '/matching/qualification',
    element: (
      <MatchingProvider>
        <QualificationForm />
      </MatchingProvider>
    ),
  },
  {
    path: '/matching/completed',
    element: (
      <MatchingProvider>
        <MatchingComplete />
      </MatchingProvider>
    ),
  },

  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
