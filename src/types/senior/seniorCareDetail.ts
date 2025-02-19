// 배변보조 타입
export type ToiletingCare =
  | 'TOILETING_INDEPENDENT' // 스스로 배변 가능
  | 'TOILETING_ASSISTANCE' // 가끔 대소변 실수 시 도움
  | 'TOILETING_BED_CARE' // 기저귀 케어 필요
  | 'TOILETING_DEVICE'; // 유치도뇨/방광루/장루

// 식사보조 타입
export type FeedingCare =
  | 'FEEDING_SELF' // 스스로 식사 가능
  | 'FEEDING_ASSIST' // 식사 차려드리기
  | 'FEEDING_COOKING' // 죽, 반찬 등 요리 필요
  | 'FEEDING_TUBE'; // 경관식 보조

// 이동보조 타입
export type MobilityCare =
  | 'MOBILITY_SELF' // 스스로 거동 가능
  | 'MOBILITY_ASSIST' // 이동 시 보조 필요
  | 'MOBILITY_WHEELCHAIR' // 휠체어 이동 보조
  | 'MOBILITY_IMMOBILE'; // 거동 불가

// 일상생활 지원 타입
export type DailyLivingSupport =
  | 'DAILY_CLEANING' // 청소, 빨래 보조
  | 'DAILY_BATHING' // 목욕 보조
  | 'DAILY_HOSPITAL' // 병원 동행
  | 'DAILY_EXERCISE' // 산책, 간단한 운동
  | 'DAILY_EMOTIONAL_SUPPORT' // 말벗 등 정서 지원
  | 'DAILY_COGNITIVE'; // 인지자극 활동

// 통합 타입
export type SeniorCareDetail = ToiletingCare | FeedingCare | MobilityCare | DailyLivingSupport | 'NOT_APPLICABLE';
