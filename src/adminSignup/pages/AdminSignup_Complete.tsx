import { useNavigate } from 'react-router-dom';
import { useAdminSignupContext } from '../store/AdminSignupContext';
import Button from '../../signup/components/Button';

const AdminSignupComplete = () => {
  const navigate = useNavigate();
  const { adminSignupData } = useAdminSignupContext();

  // 관리자 회원가입 데이터 전송 함수
  const sendSignupData = async () => {
    try {
      const response = await fetch('/api/v1/admin/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adminId: adminSignupData.adminId,
          adminPassword: adminSignupData.adminPassword,
          role: adminSignupData.role,
          centerName: adminSignupData.centerName,
          contact: adminSignupData.contact,
          email: adminSignupData.email,
          address: adminSignupData.address,
          centerGrade: adminSignupData.centerGrade,
          operatingYear: adminSignupData.operatingYear?.year || '',
          operatingPeriod: adminSignupData.operatingPeriod || '',
          description: adminSignupData.description,
          hasVehicle: adminSignupData.hasVehicle,
          centerCode: adminSignupData.centerCode,
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

  // 프로필 이미지 및 증빙 서류 전송 백엔드에서 Multipart 방식으로 처리
  const sendProfileAndDocuments = async () => {
    try {
      if (
        (!adminSignupData.profileImage || typeof adminSignupData.profileImage === 'string') &&
        !adminSignupData.centerDocument
      ) {
        console.log('전송할 파일 없음');
        return true;
      }

      const formData = new FormData();
      formData.append('adminId', adminSignupData.adminId);

      if (adminSignupData.profileImage && typeof adminSignupData.profileImage !== 'string') {
        formData.append('profileImage', adminSignupData.profileImage);
      }

      if (adminSignupData.centerDocument) {
        formData.append('centerDocument', adminSignupData.centerDocument);
      }

      const response = await fetch('/api/v1/admin/user/signup', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('파일 전송 실패');
      }

      console.log('파일 전송 성공');
      return true;
    } catch (error) {
      console.error('파일 전송 오류:', error);
      alert('파일 업로드 중 오류가 발생했습니다.');
      return false;
    }
  };

  // 확인 버튼 클릭 시 실행
  const handleSubmit = async () => {
    const signupSuccess = await sendSignupData();
    if (signupSuccess) {
      const filesUploaded = await sendProfileAndDocuments();
      if (filesUploaded) {
        navigate('/login'); // 임시로 지정
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

export default AdminSignupComplete;
