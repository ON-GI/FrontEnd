import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import client from '../../../api/instnace';
import CaregiverMainAlert from '../../../components/caregiver/main/CaregiverMainAlert';

const CareGiverMain = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  useEffect(() => {
    if (isLoggedIn !== 'ROLE_CAREGIVER') {
      navigate('/');
    }
  }, []);

  // 에러핸들링 x
  const { data, isPending } = useQuery({
    queryKey: ['caregiver'],
    queryFn: async () => {
      const response = await client.get('/caregiver');
      return response.data.data;
    },
  });

  if (isPending) {
    return null;
  }

  return (
    <>
      {!isPending && (
        <section className="p-5">
          {/* Profile & My-page */}
          <div className="mb-6 flex justify-between">
            <div>
              <div className="mb-5">
                <img src="src\assets\Union.png" alt="ONGI-LOGO" />
              </div>
              <h3 className="text-2xl text-gray-900">
                안녕하세요<div className="font-semibold">{`${data.name}님`}</div>
              </h3>
            </div>
            <div>
              <div className="mb-3 overflow-hidden rounded-full border border-gray-200">
                <img src="src/assets/images/image2.png" alt="caregiver-profile-image" />
              </div>

              {/* 라우트 경로 임의 설정 */}
              <button className="block w-full cursor-pointer rounded-lg bg-gray-100 py-1.5 text-center text-sm text-gray-900">
                마이페이지
              </button>
            </div>
          </div>

          {/* Matching Alert*/}
          <CaregiverMainAlert />

          {/* Navigation */}
          <div className="space-y-5">
            <div className="rounded-lg p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
              <div className="mb-2 flex justify-between">
                <div>
                  <p className="mb-0.5 text-[22px] font-semibold text-[#497FE2]">희망 근무 조건 설정</p>
                  <p className="text-sm text-gray-600">
                    장소,시간,희망 시급 등 <br />
                    내가 원하는 조건에 맞게 설정할 수 있어요!
                  </p>
                </div>
                <div className="size-[60px]">
                  <img src="src/assets/magnifying.png" alt="magnifying-icon" />
                </div>
              </div>
              <Link
                to="/caregiver/work-conditions/location"
                className="block rounded-lg bg-[#63A2FF] py-2 text-center text-sm text-white"
              >
                조건 설정하러 가기 &gt;
              </Link>
            </div>

            <div className="rounded-lg p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
              <div className="mb-2 flex justify-between">
                <div>
                  <p className="mb-0.5 text-[22px] font-semibold text-[#FEA65E]">매칭 요청 목록 조회</p>
                  <p className="text-sm text-gray-600">
                    나에게 들어온 매칭들을 확인하고
                    <br />
                    수락/거절할 수 있어요
                  </p>
                </div>
                <div className="size-[60px]">
                  <img src="src/assets/Note.png" alt="note-icon" />
                </div>
              </div>
              <Link
                to="/caregiver/matching"
                className="block rounded-lg bg-[#FEA65E] py-2 text-center text-sm text-white"
              >
                매칭 확인하러 가기 &gt;
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CareGiverMain;
