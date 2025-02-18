import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';

const StepBasicInfo = () => {
  const { signupData, setSignupData } = useSignupContext();
  const [name, setName] = useState(signupData.name || '');
  const [phoneNumber, setPhoneNumber] = useState(signupData.phoneNumber || '');
  const [address, setAddress] = useState(signupData.address || '');
  const [hasCar, setHasCar] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null); //프로필 이미지 상태 추가
  const navigate = useNavigate();

  //전화번호 입력 핸들러 (자동 하이픈 추가)
  const formatPhoneNumber = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, ''); //숫자만 남기고 하이픈 제거
    if (numericValue.length <= 3) {
      return numericValue;
    } else if (numericValue.length <= 7) {
      return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
    } else {
      return `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  //프로필 사진 업로드 핸들러
  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfileImage(event.target.files[0]);
    }
  };
  const handleNext = () => {
    setSignupData({
      ...signupData,
      name,
      phoneNumber,
      address,
      hasCar,
      profileImage,
    });
    navigate(`/caregiver/signup/step3`);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        {/* 제목 */}
        <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
          온기에서 사용할 <br /> 기본 정보를 입력해주세요
        </h2>

        {/*프로필 이미지 */}
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

        {/* 이름 입력 */}
        <div className="mt-6 mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            이름<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* 연락처 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            연락처<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="연락처를 입력해주세요. (예: 010-1234-1234)"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={13} // 하이픈 포함 최대 길이 13자
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* 주소 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            주소<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="주소를 입력해주세요."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* 차량 소유 여부 */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            차량 소유 여부<span className="text-red-500">*</span>
          </label>
          <div className="mt-2 flex gap-4">
            {/* 차량 없음 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="car"
                value="false"
                checked={!hasCar}
                onChange={() => setHasCar(false)}
                className="accent-primary-500 h-5 w-5"
              />
              <span className="text-gray-900">차량 없음</span>
            </label>

            {/* 차량 있음 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="car"
                value="true"
                checked={hasCar}
                onChange={() => setHasCar(true)}
                className="accent-primary-500 h-5 w-5"
              />
              <span className="text-gray-900">차량 있음</span>
            </label>
          </div>
        </div>
      </div>

      <Button text="다음으로" onClick={handleNext} disabled={!name || !phoneNumber || !address} isFixed={true} />
    </div>
  );
};

export default StepBasicInfo;
