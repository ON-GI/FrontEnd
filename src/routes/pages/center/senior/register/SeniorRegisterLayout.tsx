import { createContext, useState } from 'react';
import { SeniorRegister } from '../../../../../types/senior/seniorRegister';
import { Outlet } from 'react-router-dom';

const seniorRegisterDefaultValues: SeniorRegister = {
  name: '',
  birthDate: '',
  age: 0,
  weight: 0,
  gender: 'OTHER',
  gradeType: '',
  residence: {},
  residenceType: '',
  staffContact: '',
  profileImageUrl: '',
  centerId: 0,
  careCondition: '',
  careTimes: [],
  diseaseCondition: '',
};

interface SeniorRegisterContext {
  seniorInfo: SeniorRegister;
  setSeniorInfo: React.Dispatch<React.SetStateAction<SeniorRegister>>;
}

export const SeniorRegisterContext = createContext<SeniorRegisterContext>({
  seniorInfo: seniorRegisterDefaultValues,
  setSeniorInfo: () => {},
});

const SeniorRegisterLayout = () => {
  const [seniorInfo, setSeniorInfo] = useState<SeniorRegister>(seniorRegisterDefaultValues);

  return (
    <SeniorRegisterContext.Provider value={{ seniorInfo, setSeniorInfo }}>
      <main className="h-[100svh] text-gray-900">
        <Outlet />
      </main>
    </SeniorRegisterContext.Provider>
  );
};

export default SeniorRegisterLayout;
