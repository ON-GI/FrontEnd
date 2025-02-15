import { createContext, useContext, useState, ReactNode } from 'react';

// ✅ 어르신 더미 데이터 타입 정의
interface ElderlyInfo {
  name: string;
  region: string;
  schedule: string;
  careItems: string[];
  hourlyWage: number;
  benefits: string;
  birthYear: number;
  gender: string;
  longTermCareGrade: string | null;
  dementia: string;
  cohabitation: string;
  institution: string;
}

// ✅ 매칭 Flow 상태 타입 정의
interface MatchingContextType {
  elderlyInfo: ElderlyInfo;
  setElderlyInfo: (info: ElderlyInfo) => void;
}

// ✅ 어르신 더미 데이터
const dummyElderly: ElderlyInfo = {
  name: '김OO 어르신',
  region: '서울시 서대문구 연희동',
  schedule: '월요일 오전, 오후 / 목요일 오후',
  careItems: ['식사보조', '배변보조'],
  hourlyWage: 11000,
  benefits: '4대보험, 교통비 지원',
  birthYear: 1945,
  gender: '남',
  longTermCareGrade: null,
  dementia: '없음(정상)',
  cohabitation: '독거',
  institution: 'OO노인복지관',
};

// ✅ Context 생성
const MatchingContext = createContext<MatchingContextType | undefined>(undefined);

// ✅ Provider 설정
export const MatchingProvider = ({ children }: { children: ReactNode }) => {
  const [elderlyInfo, setElderlyInfo] = useState<ElderlyInfo>(dummyElderly);

  return <MatchingContext.Provider value={{ elderlyInfo, setElderlyInfo }}>{children}</MatchingContext.Provider>;
};

// ✅ Custom Hook (Context 사용을 편하게 하기 위함)
export const useMatchingContext = () => {
  const context = useContext(MatchingContext);
  if (!context) {
    throw new Error('useMatchingContext must be used within a MatchingProvider');
  }
  return context;
};
