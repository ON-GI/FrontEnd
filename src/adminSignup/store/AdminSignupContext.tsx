import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface AdminSignupData {
  adminId: string;
  adminPassword: string;
  role: '센터장' | '사회복지사' | ''; // 직급 선택 (필수)
  centerName: string;
  contact: string;
  email: string;
  address: string;
  profileImage: File | string | null; // 프로필 사진
  centerDocument: File | null; // 센터 증빙서류
  centerGrade: string; // 센터 등급
  operatingYear: { year: string }; // 센터 운영 기간
  description: string; // 한 줄 소개
  hasVehicle: boolean; // 차량 보유 여부
  centerCode: string; // 사회복지사 회원가입 시 센터 코드 입력
  operatingPeriod: string;
}

interface AdminSignupContextType {
  adminSignupData: AdminSignupData;
  setAdminSignupData: Dispatch<SetStateAction<AdminSignupData>>;
}

const AdminSignupContext = createContext<AdminSignupContextType | undefined>(undefined);

export const AdminSignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [adminSignupData, setAdminSignupData] = useState<AdminSignupData>({
    adminId: '',
    adminPassword: '',
    role: '',
    centerName: '',
    contact: '',
    email: '',
    address: '',
    profileImage: null,
    centerDocument: null,
    centerGrade: '',
    operatingYear: { year: '' },
    description: '',
    hasVehicle: false,
    centerCode: '',
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
