import { useState } from 'react';
import { Times } from '../../../../types/senior/seniorRegister';
import SeniorCareTimeFormRow from './SeniorCareTimeFormRow';

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
  const [rows, setRows] = useState<Record<string, number>>(
    dayOfWeek.reduce(
      (acc, day) => {
        acc[day.id] = 1;
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
      {dayOfWeek.map((item) => (
        <div key={item.id} className="space-y-3">
          {Array.from({ length: rows[item.id] }).map((_, index) => (
            <SeniorCareTimeFormRow onChange={onChange} dayOfWeek={item.id} key={`${item.id}-${index}`}>
              {item.label[0]}
            </SeniorCareTimeFormRow>
          ))}
          <div className="text-primary-400 text-right">
            <button onClick={() => addRow(item.id)}>시간 추가하기</button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default SeniorCareTimeForm;
