import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SignupProvider } from './signup/store/SignupContext';

const StepIdPassword = lazy(() => import('./signup/pages/StepIdPassword'));
const StepBasicInfo = lazy(() => import('./signup/pages/StepBasicInfo'));
const StepCertifications = lazy(() => import('./signup/pages/StepCertifications'));
const StepExperienceServices = lazy(() => import('./signup/pages/StepExperienceServices'));
const StepExperienceServices_2 = lazy(() => import('./signup/pages/StepExperienceServices_2'));
const StepOptionalInfo = lazy(() => import('./signup/pages/StepOptionalInfo'));
const SignupComplete = lazy(() => import('./signup/pages/SignupComplete'));

/**
 * 회원가입 기본 리다이렉트 설정
 * 로그인 시 ?q=caregiver 또는 ?q=admin 쿼리스트링을 이용하여 올바른 회원가입 경로로 이동
 */
const DefaultRedirect = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get('q');

  // 기본 회원가입 경로 설정 (admin 또는 caregiver)
  const defaultSignupPath = userType === 'admin' ? '/signup/admin/step1' : '/signup/caregiver/step1';
  return <Navigate to={defaultSignupPath} replace />;
};

function App() {
  return (
    <Router>
      <SignupProvider>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">로딩 중...</div>}>
          <Routes>
            {/* 로그인 후 회원가입 시작 시 기본 경로 이동 (쿼리스트링을 기반으로 구분) */}
            <Route path="/" element={<DefaultRedirect />} />
            <Route path="/signup" element={<DefaultRedirect />} />

            {/* 요양보호사 회원가입 경로 */}
            <Route path="/signup/caregiver/step1" element={<StepIdPassword />} />
            <Route path="/signup/caregiver/step2" element={<StepBasicInfo />} />
            <Route path="/signup/caregiver/step3" element={<StepCertifications />} />
            <Route path="/signup/caregiver/step4" element={<StepOptionalInfo />} />
            <Route path="/signup/caregiver/step5" element={<StepExperienceServices />} />
            <Route path="/signup/caregiver/step6" element={<StepExperienceServices_2 />} />
            <Route path="/signup/caregiver/complete" element={<SignupComplete />} />

            {/* 관리자 회원가입 경로 */}
            <Route path="/signup/admin/step1" element={<StepIdPassword />} />
            <Route path="/signup/admin/step2" element={<StepBasicInfo />} />
            <Route path="/signup/admin/step3" element={<StepCertifications />} />
            <Route path="/signup/admin/step4" element={<StepOptionalInfo />} />
            <Route path="/signup/admin/step5" element={<StepExperienceServices />} />
            <Route path="/signup/admin/step6" element={<StepExperienceServices_2 />} />
            <Route path="/signup/admin/complete" element={<SignupComplete />} />

            {/* 존재하지 않는 경로일 경우 기본 회원가입 페이지로 리다이렉트 */}
            <Route path="*" element={<DefaultRedirect />} />
          </Routes>
        </Suspense>
      </SignupProvider>
    </Router>
  );
}

export default App;
