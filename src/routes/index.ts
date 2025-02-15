import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MatchingProvider } from '../matching/store/MatchingContext'; // ✅ 올바른 경로로 수정

// ✅ 매칭 관련 페이지 (Lazy Loading)
const ElderlyInfo = lazy(() => import('../matching/components/ElderlyInfo')); // 1번 화면
const RejectModal = lazy(() => import('../matching/components/RejectModal')); // 2번 화면
const AdjustForm = lazy(() => import('../matching/components/AdjustForm')); // 3번 화면
const QualificationForm = lazy(() => import('../matching/components/QualificationForm')); // 4번 화면
const MatchingComplete = lazy(() => import('../matching/components/MatchingComplete')); // 5번 화면

function MatchingRoutes() {
  return (
    <MatchingProvider> {/* ✅ MatchingProvider를 Router 바깥으로 이동 */}
      <Router>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">로딩 중...</div>}>
          <Routes>
            {/* ✅ 요양보호사 매칭 플로우 */}
            <Route path="/matching/caregiver/info" element={<ElderlyInfo />} /> {/* 1번 화면 */}
            <Route path="/matching/caregiver/reject" element={<RejectModal />} /> {/* 2번 화면 */}
            <Route path="/matching/caregiver/adjust" element={<AdjustForm />} /> {/* 3번 화면 */}
            <Route path="/matching/caregiver/qualification" element={<QualificationForm />} /> {/* 4번 화면 */}
            <Route path="/matching/caregiver/complete" element={<MatchingComplete />} /> {/* 5번 화면 */}

            {/* ✅ 존재하지 않는 경로 처리 */}
            <Route path="*" element={<Navigate to="/matching/caregiver/info" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </MatchingProvider>
  );
}

export default MatchingRoutes;
