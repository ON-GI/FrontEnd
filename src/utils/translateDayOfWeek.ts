export const translateDayOfWeek = (dayOfWeek: string): string => {
  const daysMap: { [key: string]: string } = {
    MONDAY: '월요일',
    TUESDAY: '화요일',
    WEDNESDAY: '수요일',
    THURSDAY: '목요일',
    FRIDAY: '금요일',
    SATURDAY: '토요일',
    SUNDAY: '일요일',
  };
  return daysMap[dayOfWeek] || dayOfWeek; // 매칭되는 요일이 없으면 그대로 반환
};
