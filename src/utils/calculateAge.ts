const calculateAge = (birthDate: string): string => {
  const [year, month, day] = birthDate.split('-').map(Number);

  const currentYear = 2025;
  const currentMonth = 1;
  const currentDay = 1;

  let age = currentYear - year;

  if (month > currentMonth || (month === currentMonth && day > currentDay)) {
    age--;
  }

  return age.toString();
};

export default calculateAge;
