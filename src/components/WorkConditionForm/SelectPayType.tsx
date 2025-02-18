import DropDown from '../common/Dropdown/DropDown';

type PayType = 'HOURLY' | 'DAILY' | 'MONTHLY';

const payType = [
  {
    label: '시급',
    value: 'HOURLY',
  },
  {
    label: '일급',
    value: 'DAILY',
  },
  {
    label: '월급',
    value: 'MONTHLY',
  },
];

const SelectPayType = ({ value, handleChange }: { value: string; handleChange: (value: PayType) => void }) => {
  return (
    <DropDown selectValue={value} handleSelect={(value) => handleChange(value)}>
      <DropDown.Trigger placeholder="급여 형태" />
      <DropDown.Options position="bottom">
        {payType.map((value) => (
          <DropDown.Option key={value.value} value={value.label}>
            {value.label}
          </DropDown.Option>
        ))}
      </DropDown.Options>
    </DropDown>
  );
};

export default SelectPayType;
