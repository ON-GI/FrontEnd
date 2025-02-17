import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminSignupContext } from '../store/AdminSignupContext';

const AdminSignupStep3 = () => {
  const { adminSignupData, setAdminSignupData } = useAdminSignupContext();
  const [centerName, setCenterName] = useState(adminSignupData.centerName || '');
  const [contact, setContact] = useState(adminSignupData.contact || '');
  const [email, setEmail] = useState(adminSignupData.email || '');
  const [address, setAddress] = useState(adminSignupData.address || '');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const navigate = useNavigate();

  // 전화번호 입력 핸들러 (자동 하이픈 추가)
  const formatPhoneNumber = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 3) {
      return numericValue;
    } else if (numericValue.length <= 7) {
      return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
    } else {
      return `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
    }
  };

  // 이메일 유효성 검사 함수 추가
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isEmailValid = isValidEmail(email);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setContact(formatted);
  };

  // 프로필 사진 업로드 핸들러
  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfileImage(event.target.files[0]);
    }
  };

  const handleNext = () => {
    setAdminSignupData({
      ...adminSignupData,
      centerName,
      contact,
      email,
      address,
      profileImage,
    });
    navigate('/adminSignup/step4');
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
          온기에서 사용할 <br /> 기본 정보를 입력해주세요
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-gray-300">
            <img
              src={profileImage ? URL.createObjectURL(profileImage) : '/images/girl.png'}
              alt="프로필 이미지"
              className="h-32 w-32 translate-y-2 object-contain"
            />
          </div>
          <label className="mt-2 cursor-pointer text-sm font-semibold text-gray-900">
            프로필 사진 변경하기
            <input type="file" accept="image/*" className="hidden" onChange={handleProfileImageChange} />
          </label>
        </div>

        <div className="mt-6 mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            센터 이름<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="센터 이름을 입력해주세요."
            value={centerName}
            onChange={(e) => setCenterName(e.target.value)}
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            연락처<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="연락처를 입력해주세요. (예: 010-1234-1234)"
            value={contact}
            onChange={handlePhoneNumberChange}
            maxLength={13}
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            이메일<span className="text-red-500">*</span>
          </label>
          {/* 이메일 입력 필드 수정 (유효성 검사 추가) */}
          <input
            type="email"
            placeholder="이메일을 입력해주세요. (예: Ongi@naver.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`focus:border-primary-500 mt-1 w-full rounded-md border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none ${
              email && !isEmailValid ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {email && !isEmailValid && <p className="mt-1 text-sm text-red-500">올바른 이메일 형식을 입력해주세요.</p>}
        </div>

        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            주소<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="센터 이름 입력 시 자동입력"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
      {/* 버튼 */}
      <div className="mx-auto flex w-full max-w-md gap-2">
        <button
          onClick={() => navigate('/adminSignup/step2')}
          className="w-1/3 rounded-md border border-gray-300 bg-gray-300 px-4 py-3 font-semibold text-gray-700"
        >
          뒤로가기
        </button>

        <button
          onClick={handleNext}
          disabled={!centerName || !contact || !email || !isEmailValid || !address}
          className={`w-2/3 rounded-md px-4 py-3 font-semibold ${
            !centerName || !contact || !email || !isEmailValid || !address
              ? 'bg-primary-100 cursor-not-allowed text-white'
              : 'bg-primary-500 text-white'
          }`}
        >
          입력 완료
        </button>
      </div>
    </div>
  );
};

export default AdminSignupStep3;
