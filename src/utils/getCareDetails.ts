interface CareDetail {
  type: string; // 예: '식사보조', '배변보조' 등
  descript: string; // 예: '밥을 못 먹음', '화장실을 혼자 갈 수 없음' 등
}

export const getCareTypes = (careDetails: CareDetail[]): string[] => {
  return careDetails
    .map((detail) => detail.type)
    .join(', ')
    .split('');
};

export const getCareDescripts = (careDetails: CareDetail[]): string[] => {
  return careDetails.map((detail) => detail.descript);
};
