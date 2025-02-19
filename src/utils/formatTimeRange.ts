export const formatTimeRange = (startTime: string, endTime: string): string => {
  const formattedStartTime = startTime.slice(0, 5);
  const formattedEndTime = endTime.slice(0, 5);
  return `${formattedStartTime} ~ ${formattedEndTime}`;
};
