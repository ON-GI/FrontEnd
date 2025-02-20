import { useNavigate } from 'react-router-dom';
import BaseButton from '../../../../components/common/BaseButton';

const WorkConditionComplete = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center">
      <div>
        <img src="/images/checked.png" className="mx-auto size-[75px]" />
        <p className="py-2 text-2xl font-semibold text-gray-900">등록이 완료되었습니다!</p>
      </div>

      <div className="absolute bottom-4 w-full px-5">
        <BaseButton onClick={() => navigate('/caregiver')} className="w-full">
          확인
        </BaseButton>
      </div>
    </div>
  );
};

export default WorkConditionComplete;
