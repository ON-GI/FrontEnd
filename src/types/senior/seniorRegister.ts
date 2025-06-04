import { SeniorCareDetail } from './seniorCareDetail';

export interface WorkRegions {
  city: string;
  district: string;
  town: string;
}

export interface Times {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export type GradeType = 'GRADE_NO' | 'GRADE_1' | 'GRADE_2' | 'GRADE_3' | 'GRADE_4' | 'GRADE_5' | 'GRADE_SUPPORT';

export type ResidenceType = 'ALONE' | 'WITH_SPOUSE_HOME' | 'WITH_SPOUSE_AWAY' | 'WITH_FAMILY_HOME' | 'WITH_FAMILY_AWAY';

export interface CareCondition {
  careStartDate: string; // 케어 시작일 (YYYY-MM-DD)
  careEndDate: string; // 케어 종료일 (YYYY-MM-DD)
  careDetails: SeniorCareDetail[];
}

// 치매증상
export type DementiaSymptoms =
  | 'GETTING_LOST' // 길을 잃거나 자주 가던 곳을 해맴
  | 'DELUSIONS' // 사람을 의심하는 망상
  | 'WANDERING' // 집 밖을 나감
  | 'MEMORY_LOSS' // 단기 기억 장애
  | 'CANNOT_RECOGNIZE_FAMILY' // 가족을 알아보지 못함
  | 'CHILDISH_BEHAVIOR' // 어린아이 같은 행동
  | 'AGGRESSIVE_BEHAVIOR' // 공격적인 행동
  | 'OTHERS'; // 기타 증상

export interface DiseaseCondition {
  disease?: string;
  additionalDementiaSymptoms?: string;
  dementiaSymptoms: DementiaSymptoms;
}

export interface SeniorRegister {
  name: string; // 이름
  birthDate: string; // 생년월일
  age: number; // 나이
  weight: number; // 몸무게
  gender: 'MALE' | 'FEMALE' | 'OTHER'; // 성별
  gradeType: GradeType | ''; // 요양 등급 (1~5등급);
  residence: WorkRegions | {}; // 거주지역
  residenceType: ResidenceType | ''; // 거주형태
  staffContact: string; // 담당 관리자의 연락처
  profileImageUrl: string; // 어르신 프로필 이미지
  centerId: number; // 소속 센터 ID;
  careCondition: CareCondition | {}; // 필요한 케어 항목
  careTimes: Times[] | []; // 케어 시간
  diseaseCondition: DiseaseCondition | {}; // 치매증상 외 다른 질병 및 증상
}
