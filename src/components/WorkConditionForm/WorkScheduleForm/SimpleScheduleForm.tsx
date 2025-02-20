import { useContext } from 'react';
import { WorkTime } from '../../../routes/pages/caregiver/work-condition/WorkScheduleForm';
import { WorkConditionContext } from '../WorkConditionFormProvider';
import React from 'react';

export const dayOfWeek = [
  { id: 'MONDAY', label: '월요일' },
  { id: 'TUESDAY', label: '화요일' },
  { id: 'WEDNESDAY', label: '수요일' },
  { id: 'THURSDAY', label: '목요일' },
  { id: 'FRIDAY', label: '금요일' },
  { id: 'SATURDAY', label: '토요일' },
  { id: 'SUNDAY', label: '일요일' },
];

const workTimeData = [
  {
    label: '오전 (9-12시)',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    label: '오후 (12-6시)',
    startTime: '12:00',
    endTime: '18:00',
  },
  {
    label: '저녁 (6-9시)',
    startTime: '18:00',
    endTime: '21:00',
  },
];

const SimpleScheduleForm = () => {
  const { workConditions, setWorkConditions } = useContext(WorkConditionContext);

  const { workTimes } = workConditions;
  const handleSelectTime = (workTime: WorkTime) => {
    const isSelected = workTimes.some(
      (time) =>
        time.dayOfWeek === workTime.dayOfWeek &&
        time.startTime === workTime.startTime &&
        time.endTime === workTime.endTime,
    );

    const updatedTimes = isSelected
      ? workTimes.filter(
          (time) =>
            !(
              time.dayOfWeek === workTime.dayOfWeek &&
              time.startTime === workTime.startTime &&
              time.endTime === workTime.endTime
            ),
        )
      : [...workTimes, workTime];

    setWorkConditions({
      ...workConditions,
      workTimes: updatedTimes,
    });
  };

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {dayOfWeek.map((item) => (
          <li key={item.id}>
            <p className="mb-2 font-medium text-gray-900">{item.label}</p>
            <div className="grid grid-cols-3 gap-3">
              {workTimeData.map((time) => (
                <label
                  key={time.label}
                  className="has-checked:border-primary-500 has-checked:text-primary-500 has-checked:bg-primary-100 cursor-pointer rounded-lg border border-gray-300 py-3 text-center text-sm transition-colors"
                >
                  {time.label}
                  <input
                    type="checkbox"
                    id={time.label}
                    name={time.label}
                    className="hidden"
                    checked={workTimes.some(
                      (wt) =>
                        wt.dayOfWeek === item.id && wt.startTime === time.startTime && wt.endTime === time.endTime,
                    )}
                    onChange={(e) =>
                      handleSelectTime({ dayOfWeek: item.id, startTime: time.startTime, endTime: time.endTime })
                    }
                  />
                </label>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleScheduleForm;
