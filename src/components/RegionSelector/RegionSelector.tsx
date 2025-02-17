import { useState } from 'react';
import regions from '../../data/regions';
import { WorkRegions } from '../../types/workCondition';

import closeButton from '../../assets/close.png';

interface Subregion {
  id: string;
  name: string;
  subregions?: Subregion[]; // 하위 지역이 있을 수도 있고 없을 수도 있기 때문에 선택적
}

interface Region {
  id: string;
  name: string;
  subregions: Subregion[]; // 반드시 하위 지역이 있어야 함
}

interface Town {
  id: string;
  name: string;
}

const RegionSelector = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (workRegions: WorkRegions[]) => void;
  defaultValues?: WorkRegions[];
}) => {
  const [city, setCity] = useState<Region>(regions[0]); // 기본값은 서울
  const [district, setDistrict] = useState<Subregion | null>();

  const [townList, setTownList] = useState<Town[]>([]);
  const [selectList, setSelectList] = useState<WorkRegions[]>(defaultValues || []);

  const handleSelectCity = (value: Region) => {
    setCity(value);
    setDistrict(null);
    setTownList([]);
  };

  const handleSelectDistrict = (value: Subregion) => {
    setDistrict(value);
    setTownList(value.subregions || []);
  };

  const handleSelectTown = (value: Town, isChecked: boolean) => {
    // 요소가 이미 선택된 상태라면 해제, 아니라면 선태
    const updatedValues = isChecked
      ? [
          ...selectList,
          {
            city: city.name,
            district: district!.name,
            town: value.name,
          },
        ]
      : selectList.filter((existingValue) => {
          return existingValue.town !== value.name;
        });

    //   최대 5개까지만 선택 가능
    if (updatedValues.length > 5 && 5) return;

    // 배열로 전달
    setSelectList(updatedValues);
  };
  return (
    <>
      <div className="flex w-full border-b border-b-gray-100 text-center text-gray-900">
        <p className="min-w-[85px] p-2.5">시/도</p>
        <p className="w-1/2 py-2.5">시/군/구</p>
        <p className="w-1/2 py-2.5">동/읍/면</p>
      </div>
      <div className="flex min-h-0 divide-x-[1px] divide-gray-100">
        {/* 시/도 */}
        <div className="relative flex h-full min-w-[85px] flex-col space-y-2.5 overflow-x-auto overflow-y-auto bg-gray-50">
          <ul role="radiogroup" className="overflow-auto bg-gray-50 text-center">
            {regions.map((value, idx) => (
              <li key={idx}>
                <input
                  type="radio"
                  id={value.id}
                  name="city"
                  checked={city.id === value.id}
                  onChange={() => handleSelectCity(value)}
                  className="hidden"
                />
                <label
                  htmlFor={value.id}
                  className={`block cursor-pointer p-2.5 ${city?.id === value.id ? 'bg-primary-400 text-white' : 'text-gray-500'}`}
                >
                  {value.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* 시/군/구 */}
        <div className="flex w-1/2 flex-col space-y-2.5">
          <ul role="radiogroup" className="overflow-auto text-center">
            {city?.subregions.map((value, idx) => (
              <li key={idx} className="has-checked:bg-primary-100 has-checked:text-primary-400 text-gray-500">
                <input
                  type="radio"
                  id={value.id}
                  name="district"
                  checked={district?.id === value.id}
                  onChange={() => handleSelectDistrict(value)}
                  className="hidden"
                />
                <label htmlFor={value.id} className="block cursor-pointer p-2.5">
                  {value.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* 읍/면/동 */}
        <div className="flex w-1/2 flex-col space-y-2.5">
          <ul className="overflow-auto text-center">
            {townList?.map((value, idx) => (
              <li key={idx} className="has-checked:bg-primary-100 has-checked:text-primary-400 text-gray-500">
                <input
                  type="checkbox"
                  id={value.id}
                  checked={selectList.some((region) => region.town === value.name)}
                  onChange={(e) => handleSelectTown(value, e.target.checked)}
                  className="hidden"
                />
                <label htmlFor={value.id} className="block cursor-pointer p-2.5">
                  {value.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex min-h-[192px] w-full flex-col justify-between gap-4 bg-white p-5 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.12)]">
        <p>
          <span className="text-primary-400">최대 5개</span>까지 선택할 수 있어요
        </p>
        <ul className="flex gap-2 overflow-x-scroll whitespace-nowrap">
          {selectList.map((value) => (
            <li key={value.town} className="bg-gray-150 flex items-center gap-2 rounded-lg px-3.5 py-3 text-gray-600">
              {value.town}
              <button className="size-[20px]" onClick={() => handleSelectTown({ name: value.town } as Town, false)}>
                <img src={closeButton} alt="삭제버튼" className="m-auto" />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button className="bg-gray-150 w-[25%] rounded-lg py-3">뒤로가기</button>
          <button
            disabled={selectList.length < 1}
            onClick={() => onSubmit(selectList)}
            className="bg-primary-400 disabled:bg-primary-200 w-[75%] cursor-pointer rounded-lg py-3 text-white transition-colors disabled:cursor-auto"
          >
            입력완료
          </button>
        </div>
      </div>
    </>
  );
};

export default RegionSelector;
