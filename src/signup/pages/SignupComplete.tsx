import { useNavigate } from 'react-router-dom';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import client from '../../api/instnace';

const SignupComplete = () => {
  const navigate = useNavigate();
  const { signupData } = useSignupContext();

  // 🔹 한글 → 영어 ENUM 매핑
  const LICENSE_NAME_MAP: { [key: string]: string } = {
    '요양보호사 자격증': 'CAREGIVER',
    '사회복지사 자격증': 'SOCIAL_WORKER',
    '간호조무사 자격증': 'NURSE_AIDE',
  };

  // 🔹 회원가입 데이터 전송
  const sendSignupData = async () => {
    try {
      const response = await client.post('/api/v1/caregiver/signup', {
        loginId: signupData.loginId,
        password: signupData.password,
        name: signupData.name,
        phoneNumber: signupData.phoneNumber,
        address: signupData.address,
        hasCar: signupData.hasCar,
        hasDementiaTraining: signupData.information.hasDementiaTraining,
        licenses: signupData.information.licenses.map((license) => ({
          licenseName: LICENSE_NAME_MAP[license.licenseName] || license.licenseName,
          licenseNumber: license.licenseNumber,
          licenseGrade: license.licenseGrade,
        })),
        toiletingAssistance: signupData.information.toiletingAssistance,
        feedingAssistance: signupData.information.feedingAssistance,
        mobilityAssistance: signupData.information.mobilityAssistance,
        dailyLivingAssistance: signupData.information.dailyLivingAssistance,
        career: signupData.optional.career,
        description: signupData.optional.description,
      });

      // ✅ API 성공 응답 처리
      if (response.data?.caregiverId) {
        console.log(`✅ 회원가입 성공! caregiverId: ${response.data.caregiverId}`);
        return true;
      } else {
        console.error('❌ 회원가입 응답 형식이 예상과 다릅니다.');
        alert('회원가입 처리 중 오류가 발생했습니다.');
        return false;
      }
    } catch (error: any) {
      console.error('❌ 회원가입 데이터 전송 오류:', error);

      // ✅ API에서 제공하는 에러 메시지 출력
      if (error.response?.data?.message) {
        alert(`회원가입 실패: ${error.response.data.message}`);
      } else {
        alert('회원가입 중 알 수 없는 오류가 발생했습니다.');
      }

      return false;
    }
  };

  // 🔹 프로필 이미지 전송 함수 (Multipart)
  const sendProfileImage = async () => {
    try {
      if (!signupData.profileImage || typeof signupData.profileImage === 'string') {
        console.log('🛑 프로필 이미지 없음 (전송 생략)');
        return true; // 프로필 이미지가 없으면 바로 성공 처리
      }

      const formData = new FormData();
      formData.append('profileImage', signupData.profileImage);

      // ✅ API 요청 시 Authorization 헤더 추가
      const response = await client.post('/api/v1/caregiver/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${signupData.accessToken}`, // 🔹 AccessToken 추가
        },
      });

      // ✅ 성공 응답 처리
      if (response.data?.data === '프로필 이미지 등록 완료했습니다.') {
        console.log('✅ 프로필 이미지 전송 성공');
        return true;
      } else {
        console.error('❌ 프로필 이미지 응답이 예상과 다릅니다.');
        alert('프로필 이미지 처리 중 오류가 발생했습니다.');
        return false;
      }
    } catch (error: any) {
      console.error('❌ 프로필 이미지 전송 오류:', error);

      // ✅ API에서 제공하는 에러 메시지 출력
      if (error.response?.data?.message) {
        alert(`이미지 업로드 실패: ${error.response.data.message}`);
      } else {
        alert('이미지 업로드 중 알 수 없는 오류가 발생했습니다.');
      }

      return false;
    }
  };

  // 🔹 "확인" 버튼 클릭 시 회원가입 진행
  const handleSubmit = async () => {
    const signupSuccess = await sendSignupData();
    if (signupSuccess) {
      const imageUploadSuccess = await sendProfileImage();
      if (imageUploadSuccess) {
        navigate('/login'); // ✅ 회원가입 완료 후 로그인 페이지로 이동
      }
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pb-6">
      <img src="/images/checked.png" alt="회원가입 완료" className="mb-6 h-20 w-20" />
      <h2 className="mb-4 text-xl font-bold text-gray-900">회원가입이 완료되었어요!</h2>
      <Button text="확인" onClick={handleSubmit} isFixed={true} />
    </div>
  );
};

export default SignupComplete;
