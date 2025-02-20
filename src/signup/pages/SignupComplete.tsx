import { useNavigate } from 'react-router-dom';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import client from '../../api/instnace';
import { setCookie, getCookie } from '../../utils/cookie';
import React from 'react';

const SignupComplete = () => {
  const navigate = useNavigate();
  const { signupData } = useSignupContext();

  const LICENSE_NAME_MAP: { [key: string]: string } = {
    '요양보호사 자격증': 'CAREGIVER',
    '사회복지사 자격증': 'SOCIAL_WORKER',
    '간호조무사 자격증': 'NURSE_AIDE',
  };

  // 회원가입 요청 (accessToken 저장)
  const sendSignupData = async () => {
    const requestBody = {
      loginId: signupData.loginId,
      password: signupData.password,
      name: signupData.name,
      phoneNumber: signupData.phoneNumber,
      address: signupData.address,
      hasCar: signupData.hasCar,
      information: {
        hasDementiaTraining: signupData.information.hasDementiaTraining,
        toiletingAssistance: signupData.information.toiletingAssistance,
        feedingAssistance: signupData.information.feedingAssistance,
        mobilityAssistance: signupData.information.mobilityAssistance,
        dailyLivingAssistance: signupData.information.dailyLivingAssistance,
        licenses: signupData.information.licenses.map((license) => ({
          licenseName: LICENSE_NAME_MAP[license.licenseName] || license.licenseName,
          licenseNumber: license.licenseNumber,
          licenseGrade: license.licenseGrade,
        })),
      },
      optional: {
        career: signupData.optional.career,
        description: signupData.optional.description,
      },
    };

    console.log('회원가입 요청 데이터:', JSON.stringify(requestBody, null, 2));

    try {
      const response = await client.post('/caregiver/signup', requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('회원가입 응답 데이터:', response.data);

      if (response.data?.data?.caregiverId && response.data?.data?.accessToken) {
        const caregiverId = response.data.data.caregiverId;
        const accessToken = response.data.data.accessToken;

        setCookie('accessToken', accessToken, { path: '/', maxAge: 3600 });

        console.log(`회원가입 성공! caregiverId: ${caregiverId}, 토큰 저장 완료`);

        // 프로필 이미지가 있을 경우 업로드
        if (signupData.profileImage) {
          await sendProfileImage(caregiverId, accessToken);
        }

        alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
        navigate('/login');
      } else {
        console.error('회원가입 응답 형식이 예상과 다릅니다.', response.data);
        alert('회원가입 처리 중 오류가 발생했습니다.');
      }
    } catch (error: any) {
      console.error('회원가입 데이터 전송 오류:', error);
      console.log('회원가입 요청 실패: ', JSON.stringify(requestBody, null, 2));

      if (error.response?.data) {
        const { errorCode, message } = error.response.data;
        console.log('응답 오류 데이터:', error.response.data);
        alert(`회원가입 실패 [코드: ${errorCode}]: ${message}`);
      } else {
        alert('회원가입 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  // 프로필 이미지 업로드 (multipart/form-data)
  const sendProfileImage = async (caregiverId: number, accessToken: string) => {
    try {
      if (!signupData.profileImage || typeof signupData.profileImage === 'string') {
        console.log('프로필 이미지 없음 (업로드 생략)');
        return;
      }

      const formData = new FormData();
      formData.append('profileImage', signupData.profileImage); // 이미지 파일 추가
      formData.append('caregiverId', caregiverId.toString()); // caregiverId 추가

      console.log('프로필 이미지 요청 데이터:', formData);

      const response = await client.post('/caregiver/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`, // accessToken 추가
        },
      });

      console.log('프로필 이미지 응답 데이터:', response.data);

      if (response.data?.data === '프로필 이미지 등록 완료했습니다.') {
        console.log('프로필 이미지 업로드 성공');
      } else {
        console.error('프로필 이미지 응답이 예상과 다릅니다.', response.data);
        alert('프로필 이미지 처리 중 오류가 발생했습니다.');
      }
    } catch (error: any) {
      console.error('프로필 이미지 전송 오류:', error);

      if (error.response?.data) {
        const { errorCode, message } = error.response.data;
        console.log('응답 오류 데이터:', error.response.data);
        alert(`이미지 업로드 실패 [코드: ${errorCode}]: ${message}`);
      } else {
        alert('이미지 업로드 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  // "확인" 버튼 클릭 시 회원가입 진행
  const handleSubmit = async () => {
    console.log('회원가입 진행 시작');
    await sendSignupData();
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
