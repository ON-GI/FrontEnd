import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { WorkConditionContext } from '../../../../components/WorkConditionForm/WorkConditionFormProvider';

import Information from '../../../../components/common/Information/Information';
import { useMutation } from '@tanstack/react-query';
import client from '../../../../api/instnace';

const formatWorkTime = ({
  dayOfWeek,
  startTime,
  endTime,
}: {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}): string => {
  const dayMap: Record<string, string> = {
    MONDAY: '월',
    TUESDAY: '화',
    WEDNESDAY: '수',
    THURSDAY: '목',
    FRIDAY: '금',
    SATURDAY: '토',
    SUNDAY: '일',
  };

  const koreanDay = dayMap[dayOfWeek] || dayOfWeek;
  return `${koreanDay}요일 ${startTime}~${endTime}`;
};

const formattingPayType = (value: string) => {
  if (value === '일급') {
    return 'DAILY';
  } else if (value === '시급') {
    return 'HOURLY';
  } else if (value === '월급') {
    return 'MONTHLY';
  }
};

const WorkConditionConfirm = () => {
  const navigate = useNavigate();

  const { workConditions } = useContext(WorkConditionContext);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await client.post('/caregiver/work-condition', {
        ...workConditions,
        payType: formattingPayType(workConditions.payType),
        payAmount: Number(workConditions.payAmount.replace(/,/g, '')),
      });
      console.log(response);
    },
    onSuccess: () => {
      navigate('/caregiver/work-conditions/complete');
    },
  });

  // workConditions 정보가 없을 때
  useEffect(() => {
    if (
      workConditions.payAmount === '' ||
      workConditions.workRegions.length === 0 ||
      workConditions.workTimes.length === 0
    ) {
      navigate('/work-condition/location');
      return;
    }
  }, []);

  return (
    <div className="flex min-h-[100svh] flex-col justify-between p-5">
      <div>
        <h3 className="mb-9 text-2xl font-semibold">
          입력하신 정보를 <br />
          다시 한 번 확인해주세요!
        </h3>

        <Information>
          <Information.Row>
            <Information.Title>근무 가능한 지역</Information.Title>
            <Information.List>
              {workConditions.workRegions.map((item) => (
                <li key={item.town}>{`${item.district} ${item.town}`}</li>
              ))}
            </Information.List>
          </Information.Row>
          <Information.Row>
            <Information.Title>근무 요일 / 시간</Information.Title>
            <Information.List>
              {workConditions.workTimes.map((item) => (
                <li key={item.dayOfWeek}>{formatWorkTime(item)}</li>
              ))}
            </Information.List>
          </Information.Row>

          <Information.Row>
            <Information.Title>희망 시급</Information.Title>
            <Information.Desc>{`${workConditions.payType} / ${workConditions.payAmount}원`}</Information.Desc>
          </Information.Row>
        </Information>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/caregiver/work-conditions/schedule')}
          className="bg-gray-150 w-[25%] cursor-pointer rounded-lg py-3"
        >
          뒤로가기
        </button>
        <button
          onClick={() => mutate()}
          className="bg-primary-400 disabled:bg-primary-200 w-[75%] cursor-pointer rounded-lg py-3 text-white transition-colors disabled:cursor-auto"
        >
          위 정보가 맞아요
        </button>
      </div>
    </div>
  );
};

export default WorkConditionConfirm;
