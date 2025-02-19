const formatDateOfBirth = (input: string): string => {
  const digits = input.replace(/\D/g, '');

  let year = digits.slice(0, 4);
  let month = digits.slice(4, 6);
  let day = digits.slice(6, 8);

  let formattedDate = year;
  if (month) formattedDate += `-${month}`;
  if (day) formattedDate += `-${day}`;

  return formattedDate;
};

export default formatDateOfBirth;
