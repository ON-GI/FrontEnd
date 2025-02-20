export type PayType = '일급' | '주급' | '시급';

export interface WorkRegions {
  city: string;
  district?: string;
  town?: string;
}

export interface WorkTimes {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}
