import { useNavigate } from 'react-router-dom';
import { useAdminSignupContext } from '../store/AdminSignupContext';
import Button from '../../signup/components/Button';
import client from '../../api/instnace';
import onLogin from '../../api/Auth/Login';

const AdminSignupComplete = () => {
  const navigate = useNavigate();
  const { adminSignupData } = useAdminSignupContext();

  // ✅ 센터 이름으로 centerId 조회
  const fetchCenterId = async () => {
    try {
      const response = await client.get(`/center/search/name?centerName=${adminSignupData.centerName}`);
      const centers = response.data?.data;

      if (centers?.length > 0) {
        return centers[0].centerId;
      } else {
        console.warn('센터 ID를 찾을 수 없습니다.');
        return null;
      }
    } catch (error) {
      console.error('센터 ID 조회 오류:', error);
      return null;
    }
  };

  // ✅ 센터 프로필 이미지 업로드
  const uploadProfileImage = async (accessToken: string) => {
    try {
      if (!adminSignupData.profileImage || typeof adminSignupData.profileImage === 'string') {
        console.log('프로필 이미지 없음 (업로드 생략)');
        return;
      }

      const formData = new FormData();
      formData.append('profileImage', adminSignupData.profileImage);

      const response = await client.post('/center/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data?.data === '프로필 이미지 등록 완료했습니다.') {
        console.log('✅ 프로필 이미지 업로드 성공');
      } else {
        alert('프로필 이미지 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('❌ 프로필 이미지 전송 오류:', error);
      alert('이미지 업로드 중 알 수 없는 오류가 발생했습니다.');
    }
  };

  // ✅ 센터 증빙 자료 업로드
  const uploadCenterDocument = async (accessToken: string) => {
    try {
      if (!adminSignupData.centerDocument || typeof adminSignupData.centerDocument === 'string') {
        console.log('센터 증빙 자료 없음 (업로드 생략)');
        return;
      }

      const formData = new FormData();
      formData.append('centerDocument', adminSignupData.centerDocument);

      const response = await client.post('/center/document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data?.data === '프로필 이미지 등록 완료했습니다.') {
        console.log('✅ 센터 증빙 자료 업로드 성공');
      } else {
        alert('센터 증빙 자료 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('❌ 센터 증빙 자료 전송 오류:', error);
      alert('센터 증빙 자료 업로드 중 알 수 없는 오류가 발생했습니다.');
    }
  };

  // ✅ 센터 등록 요청
  const registerCenter = async (accessToken: string, centerId: number) => {
    const requestBody = {
      centerName: adminSignupData.centerName,
      centerId,
      contact: adminSignupData.contact,
      email: adminSignupData.email,
      address: adminSignupData.address,
      centerGrade: adminSignupData.centerGrade,
      operatingPeriod: adminSignupData.operatingPeriod,
      description: adminSignupData.description,
      hasVehicle: adminSignupData.hasVehicle,
    };

    try {
      const response = await client.post('/center/register', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data?.data === '센터 등록 성공') {
        console.log('✅ 센터 등록 성공');
      } else {
        alert('센터 등록 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('❌ 센터 등록 요청 오류:', error);
      alert('센터 등록 중 알 수 없는 오류가 발생했습니다.');
    }
  };

  // ✅ 회원가입 요청 후 자동 로그인
  const sendAdminSignupData = async (centerId: number | null) => {
    const requestBody = {
      loginId: adminSignupData.loginId,
      password: adminSignupData.password,
      authority: adminSignupData.authority,
      centerId: adminSignupData.authority === 'ROLE_CENTER_MANAGER' ? centerId : undefined,
      centerCode: adminSignupData.authority === 'ROLE_SOCIAL_WORKER' ? adminSignupData.centerCode : undefined,
    };

    try {
      const response = await client.post('/center-staff/signup', requestBody, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data?.data?.accessToken) {
        const accessToken = response.data.data.accessToken;
        console.log(`회원가입 성공! 임시 accessToken: ${accessToken}`);

        // ✅ 프로필 이미지 업로드
        if (adminSignupData.profileImage) {
          await uploadProfileImage(accessToken);
        }

        // ✅ 센터 증빙 자료 업로드
        if (adminSignupData.centerDocument) {
          await uploadCenterDocument(accessToken);
        }

        // ✅ 센터 등록
        if (centerId) {
          await registerCenter(accessToken, centerId);
        }

        // ✅ 회원가입 후 로그인 처리
        await handleLogin();
      } else {
        alert('회원가입 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('회원가입 데이터 전송 오류:', error);
      alert('회원가입 중 알 수 없는 오류가 발생했습니다.');
    }
  };

  // ✅ 로그인 후 페이지 이동
  const handleLogin = async () => {
    try {
      const responseStatus = await onLogin({
        id: adminSignupData.loginId,
        password: adminSignupData.password,
        authority: adminSignupData.authority as 'ROLE_CAREGIVER' | 'ROLE_CENTER',
      });

      if (responseStatus === 200) {
        console.log('✅ 로그인 성공');
        navigate(adminSignupData.authority === 'ROLE_CENTER_MANAGER' ? '/center' : '/caregiver');
      } else {
        alert('로그인 실패: 서버 응답이 예상과 다릅니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  // ✅ "확인" 버튼 클릭 시 회원가입 + 로그인 진행
  const handleSubmit = async () => {
    console.log('회원가입 진행 시작');

    if (adminSignupData.authority === 'ROLE_CENTER_MANAGER') {
      const centerId = await fetchCenterId();
      if (!centerId) {
        alert('센터 ID를 찾을 수 없습니다. 센터명을 다시 확인해주세요.');
        return;
      }
      await sendAdminSignupData(centerId);
    } else {
      await sendAdminSignupData(null);
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

export default AdminSignupComplete;
