import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
import React from 'react';

// 🔥 센터 등급 ENUM 추가
export type CenterGrade = 'A' | 'B' | 'C' | 'D' | 'E';

interface AdminSignupData {
  loginId: string;
  password: string;
  role: '센터장' | '사회복지사' | ''; // 직급 선택 (필수)
  authority?: 'ROLE_CENTER_MANAGER' | 'ROLE_SOCIAL_WORKER'; // 🔥 선택적 속성으로 변경
  centerId?: string; // 🔥 센터장의 경우 센터 ID 저장
  centerCode?: string; // 🔥 사회복지사의 경우 센터 코드 저장
  centerName: string;
  contact: string;
  email: string;
  address: string;
  profileImage: File | string | null; // 🔥 업로드 후 URL 변환 대비
  centerDocument: File | string | null; // 🔥 업로드 후 URL 변환 대비
  centerGrade: CenterGrade; // 🔥 ENUM으로 변경
  operatingYear: { year: number }; // 🔥 숫자로 변경
  description: string;
  hasVehicle: boolean;
  operatingPeriod: string;
}

interface AdminSignupContextType {
  adminSignupData: AdminSignupData;
  setAdminSignupData: Dispatch<SetStateAction<AdminSignupData>>;
}

const AdminSignupContext = createContext<AdminSignupContextType | undefined>(undefined);

export const AdminSignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [adminSignupData, setAdminSignupData] = useState<AdminSignupData>({
    loginId: '',
    password: '',
    role: '',
    authority: undefined, // 🔥 초기값 undefined
    centerId: undefined, // 🔥 초기값 undefined
    centerCode: undefined, // 🔥 초기값 undefined
    centerName: '',
    contact: '',
    email: '',
    address: '',
    profileImage: null, // 🔥 File 또는 URL
    centerDocument: null, // 🔥 File 또는 URL
    centerGrade: 'A', // 🔥 ENUM 기본값
    operatingYear: { year: new Date().getFullYear() }, // 🔥 현재 연도로 기본값 설정
    description: '',
    hasVehicle: false,
    operatingPeriod: '',
  });

  return (
    <AdminSignupContext.Provider value={{ adminSignupData, setAdminSignupData }}>
      {children}
    </AdminSignupContext.Provider>
  );
};

export const useAdminSignupContext = () => {
  const context = useContext(AdminSignupContext);
  if (!context) {
    throw new Error('useAdminSignupContext must be used within an AdminSignupProvider');
  }
  return context;
};
