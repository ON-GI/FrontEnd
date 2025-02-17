import { useState } from 'react';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const LICENSE_OPTIONS = ['사회복지사 자격증', '간호조무사 자격증'];

const StepCertifications = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();
  const dropdownRef = useRef<(HTMLDivElement | null)[]>([]);

  const [licenses, setLicenses] = useState(
    signupData.licenses && signupData.licenses.length > 0
      ? signupData.licenses
      : [{ licenseName: '', licenseGrade: '', licenseNumber: '' }],
  );

  useEffect(() => {
    setTimeout(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current.every((ref) => ref && !ref.contains(event.target as Node))) {
          setDropdownOpenList(Array(licenses.length).fill(false));
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, 100);
  }, [licenses.length]);

  //요양보호사 자격증
  const [caregiverLicense, setCaregiverLicense] = useState(signupData.caregiverLicense || '');
  const [isValidLicense, setIsValidLicense] = useState(false);

  const toggleDropdown = (index: number) => {
    setDropdownOpenList((prev) => prev.map((open, i) => (i === index ? !open : false)));
  };

  //치매 교육 이수 여부
  const [hasDementiaTraining, setHasDementiaTraining] = useState(signupData.hasDementiaTraining || false);

  //드롭다운 활성화 여부
  const [dropdownOpenList, setDropdownOpenList] = useState<boolean[]>(Array(licenses.length).fill(false));

  //요양보호사 자격증 번호 유효성 검사
  const handleCaregiverLicenseChange = (value: string) => {
    const formattedValue = value.replace(/[^0-9]/g, ''); // 숫자만 입력 가능
    let newValue = formattedValue;

    if (formattedValue.length > 4) {
      newValue = `${formattedValue.slice(0, 4)}-${formattedValue.slice(4, 11)}`;
    }

    setCaregiverLicense(newValue);
    setIsValidLicense(/^\d{4}-\d{7}$/.test(newValue)); // 유효성 검사 (4자리 - 7자리)
  };

  //새로운 자격증 입력 필드 추가
  const handleAddLicense = () => {
    setLicenses([...licenses, { licenseName: '', licenseGrade: '', licenseNumber: '' }]);
    setDropdownOpenList([...dropdownOpenList, false]); // ❗ 새 필드 추가 시 dropdownOpenList도 같이 늘림
  };

  //입력 값 변경 핸들러
  const handleLicenseChange = (index: number, field: string, value: string) => {
    let updatedValue = value;

    //자격증 번호 입력 시 유효성 검사 적용
    if (field === 'licenseNumber') {
      updatedValue = validateLicenseNumber(licenses[index].licenseName, value);
    }

    const updatedLicenses = licenses.map((license, i) =>
      i === index ? { ...license, [field]: updatedValue } : license,
    );
    setLicenses(updatedLicenses);
  };

  //급수 드롭다운 옵션
  const getGradeOptions = (licenseName: string) => {
    if (licenseName === '사회복지사 자격증') return ['1급', '2급', '3급'];
    if (licenseName === '간호조무사 자격증') return ['1급', '2급'];
    return [];
  };

  //자격증 번호 유효성 검사
  const validateLicenseNumber = (licenseName: string, value: string): string => {
    const numericValue = value.replace(/[^0-9]/g, ''); // 숫자만 허용

    if (licenseName === '사회복지사 자격증') {
      if (numericValue.length === 1) return `${numericValue}-`;
      if (numericValue.length >= 2) return `${numericValue.slice(0, 1)}-${numericValue.slice(1, 6)}`;
    }

    if (licenseName === '간호조무사 자격증') {
      if (numericValue.length === 4) {
        const year = parseInt(numericValue, 10);
        if (year >= 1970 && year <= 2030) return `${numericValue}-`;
      } else if (numericValue.length > 4) {
        const year = parseInt(numericValue.slice(0, 4), 10);
        if (year >= 1970 && year <= 2030) return `${numericValue.slice(0, 4)}-${numericValue.slice(4, 8)}`;
        return numericValue.slice(0, 6);
      }
    }

    return numericValue;
  };

  const handleNext = () => {
    // 현재 URL을 확인하여 'caregiver' 또는 'admin'을 자동으로 감지
    const basePath = window.location.pathname.includes('admin') ? '/signup/admin' : '/signup/caregiver';

    // 추가 자격증 중 입력된 항목만 필터링 (licenseName과 licenseNumber가 비어있지 않은 것만 저장)
    const filteredLicenses = licenses.filter(
      (license) => license.licenseName.trim() !== '' && license.licenseNumber.trim() !== '',
    );

    // 최종적으로 요양보호사 자격증 포함하여 저장
    const updatedLicenses = [
      {
        licenseName: '요양보호사 1급',
        licenseNumber: caregiverLicense,
        licenseGrade: 'A',
      },
      ...filteredLicenses, // 입력된 추가 자격증만 포함
    ];

    setSignupData({
      ...signupData,
      hasDementiaTraining,
      licenses: updatedLicenses, // 최종 정리된 자격증 리스트 저장
    });

    navigate(`${basePath}/step4`); // 경로를 caregiver/admin에 맞게 설정
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        {/* 제목 */}
        <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
          가지고 계신 <br /> 자격증 정보를 입력해주세요.
        </h2>

        {/* 요양보호사 자격증 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            요양보호사 자격증 (필수)<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="자격증 번호 입력 (예: 2025-1234567)"
            value={caregiverLicense}
            onChange={(e) => handleCaregiverLicenseChange(e.target.value)}
            className="focus:border-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />

          <p className="mt-1 text-sm text-gray-500"> 예) 2025-1234567</p>
        </div>

        {/* 추가 자격증 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">다른 자격증이 있어요</label>
          {licenses.map((license, index) => (
            <div
              key={index}
              className="mb-2"
              ref={(el) => {
                if (el) {
                  dropdownRef.current[index] = el;
                }
              }}
            >
              {/* 드롭다운: 자격증 종류 선택 */}
              <div className="relative">
                <button
                  className={`flex w-full items-center justify-between rounded-md border px-4 py-3 text-left text-gray-900 focus:outline-none ${
                    dropdownOpenList[index] ? 'border-primary-500' : 'border-gray-300'
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  {license.licenseName || '자격증 종류를 선택해주세요.'}
                  <span className={`transition-transform ${dropdownOpenList[index] ? 'rotate-180' : ''}`}>⌃</span>
                </button>

                {dropdownOpenList[index] && (
                  <ul className="absolute left-0 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-md">
                    {LICENSE_OPTIONS.map((option) => (
                      <li
                        key={option}
                        className="cursor-pointer px-4 py-3 hover:bg-gray-100"
                        onClick={() => {
                          handleLicenseChange(index, 'licenseName', option);
                          toggleDropdown(index); //선택 후 드롭다운 닫기
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-2 flex gap-2">
                {/* 급수 선택 (자격증 종류 선택 후 활성화) */}
                <select
                  value={license.licenseGrade}
                  onChange={(e) => handleLicenseChange(index, 'licenseGrade', e.target.value)}
                  className="focus:border-primary-500 flex-1 rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none"
                  disabled={!license.licenseName} // 자격증이 선택되기 전에는 비활성화
                >
                  <option value="">급수 선택</option>
                  {getGradeOptions(license.licenseName).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>

                {/* 자격증 번호 입력 */}
                <input
                  type="text"
                  placeholder="자격증 번호를 입력해주세요."
                  value={license.licenseNumber}
                  onChange={(e) => handleLicenseChange(index, 'licenseNumber', e.target.value)}
                  className="focus:border-primary-500 flex-1 rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
                  disabled={!license.licenseGrade} // 급수 선택해야 입력 가능
                />
              </div>
            </div>
          ))}

          {/* 추가하기 버튼: 최초 1회만 노출 */}
          {licenses.length === 1 && (
            <button
              onClick={handleAddLicense}
              className="border-primary-500 text-primary-500 mt-2 w-full rounded-md border px-4 py-3"
            >
              추가하기
            </button>
          )}
        </div>

        {/* 치매 교육 이수 여부 */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            치매 교육 이수 여부<span className="text-red-500">*</span>
          </label>
          <div className="mt-2 flex gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dementiaTraining"
                checked={hasDementiaTraining}
                onChange={() => setHasDementiaTraining(true)}
              />
              <span className="text-gray-900">이수함</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dementiaTraining"
                checked={!hasDementiaTraining}
                onChange={() => setHasDementiaTraining(false)}
              />
              <span className="text-gray-900">이수하지 않음</span>
            </label>
          </div>
        </div>
      </div>

      <Button text="다음으로" onClick={handleNext} disabled={!isValidLicense} isFixed={true} />
    </div>
  );
};

export default StepCertifications;
