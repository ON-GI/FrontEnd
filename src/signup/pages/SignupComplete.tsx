import { useNavigate } from 'react-router-dom';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';

const SignupComplete = () => {
  const navigate = useNavigate();
  const { signupData } = useSignupContext();

  // 현재 URL을 확인하여 'caregiver' 또는 'admin'을 자동으로 감지
  const basePath = window.location.pathname.includes('admin') ? '/signup/admin' : '/signup/caregiver';

  //회원가입 데이터 전송 함수
  const sendSignupData = async () => {
    try {
      const response = await fetch(`/api/v1${basePath}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginId: signupData.loginId,
          password: signupData.password,
          name: signupData.name,
          phoneNumber: signupData.phoneNumber,
          address: signupData.address,
          hasCar: signupData.hasCar,
          hasDementiaTraining: signupData.hasDementiaTraining,
          caregiverLicense: signupData.caregiverLicense,
          licenses: signupData.licenses,
          experienceServices: signupData.experienceServices,
          experienceServices2: signupData.experienceServices2,
          career: signupData.career,
          description: signupData.description,
        }),
      });

      if (!response.ok) {
        throw new Error('회원가입 데이터 전송 실패');
      }

      console.log('회원가입 데이터 전송 성공');
      return true;
    } catch (error) {
      console.error('회원가입 데이터 전송 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
      return false;
    }
  };

  //프로필 이미지 (Multipart) 전송 함수
  const sendProfileImage = async () => {
    try {
      if (!signupData.profileImage || typeof signupData.profileImage === 'string') {
        console.log('프로필 이미지 없음 (전송 생략)');
        return true; // 프로필 이미지가 없으면 바로 성공 처리
      }

      const formData = new FormData();
      formData.append('loginId', signupData.loginId);
      formData.append('profileImage', signupData.profileImage);

      const response = await fetch(`/api/v1${basePath}/signup`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('프로필 이미지 전송 실패');
      }

      console.log('프로필 이미지 전송 성공');
      return true;
    } catch (error) {
      console.error('프로필 이미지 전송 오류:', error);
      alert('프로필 이미지 업로드 중 오류가 발생했습니다.');
      return false;
    }
  };

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
