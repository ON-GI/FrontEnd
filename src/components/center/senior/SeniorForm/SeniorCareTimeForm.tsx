import { useContext, useState } from 'react';
import { Times } from '../../../../types/senior/seniorRegister';
import SeniorCareTimeFormRow from './SeniorCareTimeFormRow';
import { SeniorRegisterContext } from '../../../../routes/pages/center/senior/register/SeniorRegisterLayout';
import React from 'react';

const dayOfWeek = [
  { id: 'MONDAY', label: '월요일' },
  { id: 'TUESDAY', label: '화요일' },
  { id: 'WEDNESDAY', label: '수요일' },
  { id: 'THURSDAY', label: '목요일' },
  { id: 'FRIDAY', label: '금요일' },
  { id: 'SATURDAY', label: '토요일' },
  { id: 'SUNDAY', label: '일요일' },
];

const SeniorCareTimeForm = ({ onChange }: { onChange: (careTime: Times) => void }) => {
  const { seniorInfo } = useContext(SeniorRegisterContext);

  const filterTimes = (dayOfWeek: string) => seniorInfo.careTimes.filter((value) => value.dayOfWeek === dayOfWeek);

  // ✅ 기존 입력값 개수를 반영해 초기 행 개수 설정
  const [rows, setRows] = useState<Record<string, number>>(() =>
    dayOfWeek.reduce(
      (acc, day) => {
        acc[day.id] = Math.max(filterTimes(day.id).length, 1); // 최소 1개 보장
        return acc;
      },
      {} as Record<string, number>,
    ),
  );

  const addRow = (dayId: string) => {
    setRows((prev) => ({
      ...prev,
      [dayId]: prev[dayId] + 1,
    }));
  };

  return (
    <ul className="flex flex-col gap-3 px-5">
      {dayOfWeek.map((item) => {
        const existingTimes = filterTimes(item.id);
        return (
          <div key={item.id} className="space-y-3">
            {Array.from({ length: rows[item.id] }).map((_, index) => {
              const existingTime = existingTimes[index] || { startTime: '', endTime: '' }; // 기존 데이터 없으면 빈 값
              return (
                <SeniorCareTimeFormRow
                  key={`${item.id}-${index}`}
                  onChange={onChange}
                  dayOfWeek={item.id}
                  defaultStartTime={existingTime.startTime}
                  defaultEndTime={existingTime.endTime}
                >
                  {item.label[0]}
                </SeniorCareTimeFormRow>
              );
            })}
            <div className="text-primary-400 text-right">
              <button onClick={() => addRow(item.id)}>시간 추가하기</button>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default SeniorCareTimeForm;
