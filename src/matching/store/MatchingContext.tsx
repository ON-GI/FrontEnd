import { createContext, useContext, useState, ReactNode } from 'react';

// 어르신 정보(아직 미정이라 임의로 작성)
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

// 조율 요청 데이터 (아직 미정이라 임의로 작성)
interface AdjustmentData {
  adjustments: string;
  additionalRequests: string;
  selectedQualifications: string[]; // ✅ 추가: 선택한 자격증
  workHistory: { category: string; detail: string }[]; // ✅ 추가: 근무 이력
}

// 매칭 상태 타입 (수락 / 거절)
interface MatchingStatus {
  isAccepted: boolean;
  isRejected: boolean;
}

// Context 타입
interface MatchingContextType {
  elderlyInfo: ElderlyInfo;
  setElderlyInfo: (info: ElderlyInfo) => void;
  adjustmentData: AdjustmentData;
  setAdjustmentData: (data: AdjustmentData) => void;
  matchingStatus: MatchingStatus;
  setMatchingStatus: (status: MatchingStatus) => void;
}

// 어르신 더미 데이터
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

// 기본 데이터
const initialAdjustmentData: AdjustmentData = {
  adjustments: '',
  additionalRequests: '',
  selectedQualifications: [], // ✅ 초기값: 빈 배열
  workHistory: [], // ✅ 초기값: 빈 배열
};

const MatchingContext = createContext<MatchingContextType | undefined>(undefined);

export const MatchingProvider = ({ children }: { children: ReactNode }) => {
  const [elderlyInfo, setElderlyInfo] = useState<ElderlyInfo>(dummyElderly);
  const [adjustmentData, setAdjustmentData] = useState<AdjustmentData>(initialAdjustmentData);
  const [matchingStatus, setMatchingStatus] = useState<MatchingStatus>({
    isAccepted: false,
    isRejected: false,
  });

  return (
    <MatchingContext.Provider
      value={{
        elderlyInfo,
        setElderlyInfo,
        adjustmentData,
        setAdjustmentData,
        matchingStatus,
        setMatchingStatus,
      }}
    >
      {children}
    </MatchingContext.Provider>
  );
};

export const useMatchingContext = () => {
  const context = useContext(MatchingContext);
  if (!context) {
    throw new Error('useMatchingContext must be used within a MatchingProvider');
  }
  return context;
};
