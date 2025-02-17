import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { WorkRegions } from '../../../types/workCondition';

import { WorkConditionContext } from '../../../components/WorkConditionForm/WorkConditionFormProvider';

import RegionSelector from '../../../components/RegionSelector/RegionSelector';

const WorkLocationForm = () => {
  const navigate = useNavigate();
  const { workConditions, setWorkConditions } = useContext(WorkConditionContext);

  const onSubmit = (workRegions: WorkRegions[]) => {
    setWorkConditions({ ...workConditions, workRegions });

    navigate('/work-condition/schedule');
  };

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden">
      <div className="mb-10 p-5">
        <h3 className="mb-3 text-2xl font-semibold">
          근무 가능한 지역을 <br />
          선택해주세요
        </h3>
        <p className="text-gray-600">최대 5개까지 선택할 수 있어요</p>
      </div>

      <RegionSelector onSubmit={onSubmit} defaultValues={workConditions.workRegions} />
    </div>
  );
};

export default WorkLocationForm;
