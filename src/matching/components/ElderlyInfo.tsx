import { useState } from 'react'; // ✅ 추가
import { useMatchingContext } from '../store/MatchingContext';
import { useNavigate } from 'react-router-dom';
import RejectModal from './RejectModal'; // ✅ 추가

const ElderlyInfo = () => {
  const { elderlyInfo } = useMatchingContext();
  const navigate = useNavigate();
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-gray-100 px-4 py-6">
      {/* 제목 */}
      <h1
        className="absolute top-[67px] left-5 text-[24px] leading-[140%] font-semibold tracking-[-0.02em] text-gray-900"
        style={{ fontFamily: 'Pretendard' }}
      >
        김OO 어르신 정보를 확인해주세요
      </h1>

      {/* 어르신 정보 카드 */}
      <div className="absolute top-1/2 left-1/2 flex h-[413px] w-[333px] -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-[8px] rounded-lg bg-gray-50 px-[11px] py-[22px]">
        <div className="flex h-[369px] w-[311px] flex-col items-start gap-[20px]">
          <table className="w-full text-sm text-gray-700">
            <tbody>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">지역</td>
                <td className="text-right">{elderlyInfo.region}</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">
                  근무 요일 및 시간
                </td>
                <td className="text-right">{elderlyInfo.schedule}</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">케어항목</td>
                <td className="text-right">{elderlyInfo.careItems.join(', ')}</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">급여</td>
                <td className="text-right">{elderlyInfo.hourlyWage.toLocaleString()}원</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">복리후생</td>
                <td className="text-right">{elderlyInfo.benefits}</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">어르신 정보</td>
                <td className="text-right">
                  {elderlyInfo.birthYear}년생 ({new Date().getFullYear() - elderlyInfo.birthYear}세),{' '}
                  {elderlyInfo.gender}, {elderlyInfo.longTermCareGrade || '없음'}
                </td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">치매 증상</td>
                <td className="text-right">{elderlyInfo.dementia}</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">동거인 여부</td>
                <td className="text-right">{elderlyInfo.cohabitation}</td>
              </tr>
              <tr>
                <td className="text-[16px] leading-[120%] font-normal tracking-[-0.02em] text-gray-900">담당 기관</td>
                <td className="text-right">{elderlyInfo.institution}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 하단 고정 버튼 영역 */}
      <div className="fixed bottom-6 left-1/2 flex w-[335px] -translate-x-1/2 gap-2">
        <button
          className="flex h-[50px] w-[88px] items-center justify-center rounded-lg bg-gray-300 font-semibold text-gray-700"
          onClick={() => setIsRejectModalOpen(true)} // ✅ 수정: 클릭 시 모달 열기
        >
          거절하기
        </button>

        <button
          className="flex h-[50px] w-[238px] items-center justify-center rounded-lg bg-[#57AD57] font-semibold text-white"
          onClick={() => navigate('/matching/caregiver/adjust')}
        >
          수락 / 조율 요청
        </button>
      </div>

      {/* ✅ 거절 모달 추가 */}
      <RejectModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)} // 닫기 기능
        onReject={() => {
          setIsRejectModalOpen(false);
          console.log('거절됨'); // 이후 백엔드 로직 추가 가능
        }}
      />
    </div>
  );
};

export default ElderlyInfo;
