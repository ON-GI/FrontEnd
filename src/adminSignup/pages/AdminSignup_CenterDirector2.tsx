import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminSignupContext } from '../store/AdminSignupContext';

const AdminSignupStep4 = () => {
  const { adminSignupData, setAdminSignupData } = useAdminSignupContext();
  const [centerDocument, setCenterDocument] = useState<File | null>(null);
  const [centerGrade, setCenterGrade] = useState(adminSignupData.centerGrade || '');
  const [operatingYear, setOperatingYear] = useState(adminSignupData.operatingYear?.year || '');
  const [description, setDescription] = useState(adminSignupData.description || '');
  const [hasVehicle, setHasVehicle] = useState(adminSignupData.hasVehicle || false);
  const [operatingPeriod, setOperatingPeriod] = useState(adminSignupData.operatingPeriod || '');

  const navigate = useNavigate();
  const gradeDropdownRef = useRef<HTMLDivElement | null>(null);
  const yearDropdownRef = useRef<HTMLDivElement | null>(null);

  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // 센터 등급 옵션
  const gradeOptions = ['A등급', 'B등급', 'C등급', 'D등급', 'E등급'];

  // 운영 연도 옵션
  const currentYear = 2025;
  const startYear = 1970;
  const yearOptions = Array.from({ length: currentYear - startYear + 1 }, (_, index) => `${currentYear - index}년`);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(event.target as Node)) {
        setIsGradeDropdownOpen(false);
      }
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCenterDocument(event.target.files[0]);
    }
  };

  const handleNext = () => {
    setAdminSignupData({
      ...adminSignupData,
      centerDocument,
      centerGrade,
      operatingYear: { year: operatingYear },
      description,
      operatingPeriod,
      hasVehicle,
    });
    console.log({
      ...adminSignupData,
      centerDocument,
      centerGrade,
      operatingYear: { year: operatingYear },
      description,
      operatingPeriod,
      hasVehicle,
    });
    navigate('/adminSignup/complete');
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h2 className="mb-4 text-left text-xl font-bold text-gray-900">
          해당되는 사항들을 <br /> 선택해주세요
        </h2>

        {/* 센터 증빙서류 (파일 업로드) */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">센터 증빙서류 (jpg 또는 pdf??)</label>
          <input
            type="file"
            accept="image/*, application/pdf"
            onChange={handleFileUpload}
            onFocus={() => setFocusedInput('file')}
            onBlur={() => setFocusedInput(null)}
            className={`mt-2 w-full rounded-md border px-4 py-3 ${
              focusedInput === 'file' ? 'border-primary-500' : 'border-gray-300'
            }`}
          />
        </div>

        {/* 센터 등급 선택 */}
        <div className="relative mb-4 text-left" ref={gradeDropdownRef}>
          <label className="block text-sm font-semibold text-gray-900">센터 등급</label>
          <button
            type="button"
            className={`mt-2 flex w-full items-center justify-between rounded-md border px-4 py-3 text-left text-gray-900 focus:outline-none ${
              isGradeDropdownOpen ? 'border-primary-500' : 'border-gray-300'
            }`}
            onClick={() => setIsGradeDropdownOpen((prev) => !prev)}
          >
            {centerGrade || '센터 등급 선택'}
            <span className={`transition-transform ${isGradeDropdownOpen ? 'rotate-180' : ''}`}>⌃</span>
          </button>
          {isGradeDropdownOpen && (
            <ul className="absolute left-0 z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-md">
              {gradeOptions.map((grade) => (
                <li
                  key={grade}
                  className="cursor-pointer px-4 py-3 hover:bg-gray-100"
                  onClick={() => {
                    setCenterGrade(grade);
                    setIsGradeDropdownOpen(false);
                  }}
                >
                  {grade}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 센터 운영 연도 및 년차 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">센터 운영 기간</label>
          <div className="flex gap-2">
            {/* 연도 선택 드롭다운 */}
            <div className="relative w-1/3" ref={yearDropdownRef}>
              <button
                type="button"
                className={`mt-2 flex w-full items-center justify-between rounded-md border px-4 py-3 text-left text-gray-900 focus:outline-none ${
                  isYearDropdownOpen ? 'border-primary-500' : 'border-gray-300'
                }`}
                onClick={() => setIsYearDropdownOpen((prev) => !prev)}
              >
                {operatingYear || '연도'}
                <span className={`transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`}>⌃</span>
              </button>

              {isYearDropdownOpen && (
                <ul className="absolute left-0 z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-md">
                  {yearOptions.map((year) => (
                    <li
                      key={year}
                      className="cursor-pointer px-4 py-3 hover:bg-gray-100"
                      onClick={() => {
                        setOperatingYear(year);
                        setIsYearDropdownOpen(false);
                      }}
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 년차 입력 */}
            <input
              type="text"
              placeholder="년차"
              value={operatingPeriod}
              onChange={(e) => setOperatingPeriod(e.target.value)}
              className="focus:border-primary-500 mt-2 w-2/3 rounded-md border border-gray-300 px-4 py-3"
            />
          </div>
        </div>

        {/* 한 줄 소개 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">한 줄 소개</label>
          <textarea
            placeholder="간단한 자기 소개를 입력해주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => setFocusedInput('description')}
            onBlur={() => setFocusedInput(null)}
            className={`mt-2 h-24 w-full rounded-md border px-4 py-3 outline-none ${
              focusedInput === 'description' ? 'border-primary-500' : 'border-gray-300'
            }`}
          />
        </div>

        {/* 차량 소유 여부 */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            차량 소유 여부<span className="text-red-500">*</span>
          </label>
          <div className="mt-2 flex gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="car"
                value="false"
                checked={!hasVehicle}
                onChange={() => setHasVehicle(false)}
                className="accent-primary-500 h-5 w-5"
              />
              <span className="text-gray-900">차량 없음</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="car"
                value="true"
                checked={hasVehicle}
                onChange={() => setHasVehicle(true)}
                className="accent-primary-500 h-5 w-5"
              />{' '}
              <span className="text-gray-900">차량 있음</span>
            </label>
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className="mx-auto flex w-full max-w-md gap-2">
        <button
          onClick={() => navigate('/adminSignup/step3')}
          className="w-1/3 rounded-md border border-gray-300 bg-gray-300 px-4 py-3 font-semibold text-gray-700"
        >
          뒤로가기
        </button>

        <button
          onClick={handleNext}
          disabled={!centerGrade || !operatingYear || !description}
          className={`w-2/3 rounded-md px-4 py-3 font-semibold ${
            !centerGrade || !operatingYear || !description
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

export default AdminSignupStep4;
