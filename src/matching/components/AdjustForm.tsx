import { useState } from 'react';
import { useMatchingContext } from '../store/MatchingContext';
import Button from '../../signup/components/Button';

const AdjustForm = ({ onNext }: { onNext: () => void }) => {
  const { elderlyInfo } = useMatchingContext();
  const [adjustments, setAdjustments] = useState('');
  const [additionalRequests, setAdditionalRequests] = useState('');

  const handleNext = () => {
    // 다음 단계로 넘길 데이터
    console.log({
      adjustments,
      additionalRequests,
    });

    onNext(); // 다음 화면으로 이동
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">조율하고 싶은 항목이 있습니까?</h2>
      <div className="mt-4 rounded-lg bg-gray-100 p-4">
        <p>
          <strong>근무 요일 및 시간:</strong> {elderlyInfo.schedule}
        </p>
        <p>
          <strong>케어항목:</strong> {elderlyInfo.careItems.join(', ')}
        </p>
        <p>
          <strong>급여:</strong> {elderlyInfo.hourlyWage.toLocaleString()}원
        </p>
        <p>
          <strong>복리후생:</strong> {elderlyInfo.benefits}
        </p>
      </div>

      {/* 조율 요청 사항 입력 */}
      <textarea
        className="mt-4 w-full rounded border p-2"
        placeholder="조율하고 싶은 내용을 작성해주세요"
        value={adjustments}
        onChange={(e) => setAdjustments(e.target.value)}
      />

      {/* 추가 요청 사항 입력 */}
      <textarea
        className="mt-4 w-full rounded border p-2"
        placeholder="기타 요청 사항이 있으면 작성해주세요"
        value={additionalRequests}
        onChange={(e) => setAdditionalRequests(e.target.value)}
      />

      {/* 다음 버튼 */}
      <Button text="다음으로" onClick={handleNext} disabled={!adjustments.trim()} />
    </div>
  );
};

export default AdjustForm;
