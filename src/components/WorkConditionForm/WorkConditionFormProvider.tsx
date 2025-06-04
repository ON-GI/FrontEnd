import { createContext, useState } from 'react';

import { PayType, WorkRegions, WorkTimes } from '../../types/workCondition';

interface WorkConditionFormValues {
  payType: PayType; // 급여형태
  payAmount: string; // 희망급여
  negotiable: boolean; // 협의 가능 여부
  workRegions: WorkRegions[]; // 근무지역
  workTimes: WorkTimes[]; // 근무가능시간
}

interface WorkConditionContext {
  workConditions: WorkConditionFormValues;
  setWorkConditions: React.Dispatch<React.SetStateAction<WorkConditionFormValues>>;
}

const WorkConditionDefaultValues: WorkConditionFormValues = {
  payType: '' as PayType,
  payAmount: '',
  negotiable: false,
  workRegions: [],
  workTimes: [],
};

export const WorkConditionContext = createContext<WorkConditionContext>({
  workConditions: WorkConditionDefaultValues,
  setWorkConditions: () => {},
});

export const WorkConditionFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [workConditions, setWorkConditions] = useState<WorkConditionFormValues>(WorkConditionDefaultValues);
  return (
    <WorkConditionContext.Provider value={{ workConditions, setWorkConditions }}>
      {children}
    </WorkConditionContext.Provider>
  );
};
