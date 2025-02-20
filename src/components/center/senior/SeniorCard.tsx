import { Link } from 'react-router-dom';
import { translateDayOfWeek } from '../../../utils/translateDayOfWeek';
import { formatTimeRange } from '../../../utils/formatTimeRange';
import { getCareTypes } from '../../../utils/getCareDetails';
import React from 'react';

const SeniorCard = ({ name, id, careCondition, gradeType, path = '/center/senior/1' }: any) => {
  return (
    <li className="w-full rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col justify-between p-4">
        <div className="mb-3 flex w-full items-center justify-between">
          <p className="font-semibold">{`${name} 어르신`}</p>
          <Link to={path} className="text-primary-400 block text-sm">
            상세 내용 확인
          </Link>
        </div>

        <div className="mb-3">
          <div className="grid grid-cols-2">
            <span className="text-gray-800">근무요일</span>
            <p>{translateDayOfWeek(careCondition.careTimes[0].dayOfWeek)}</p>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">근무시간</span>
            <p>{formatTimeRange(careCondition.careTimes[0].startTime, careCondition.careTimes[0].endTime)}</p>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">케어항목</span>
            <p>{getCareTypes(careCondition.careDetails)}</p>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">장기요양 등급</span>
            <p>{gradeType}</p>
          </div>
        </div>

        <Link to={path} className="bg-primary-400 block cursor-pointer rounded-lg py-2 text-center text-white">
          확인 및 수정
        </Link>
      </div>
    </li>
  );
};

export default SeniorCard;
