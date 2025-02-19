interface RadioGroupItem {
  label: string;
  value: string;
}

interface RadioGroupProps {
  required?: boolean;
  groupTitle: string;
  group: string;
  groupList: RadioGroupItem[];
  onChange: (value: string) => void;
}

const RadioGroup = ({ required = false, groupTitle, group, groupList, onChange }: RadioGroupProps) => {
  const labelStyle =
    'has-checked:border-primary-500 has-checked:bg-primary-100 has-checked:text-primary-500 block rounded-lg border-1 border-gray-300 py-3 text-center transition-colors';
  const inputHidden = 'hidden';

  return (
    <>
      <div className="mb-2">
        {groupTitle}
        {required && <span className="text-[#FF0000]">*</span>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {groupList.map((item) => (
          <label key={item.value} className={labelStyle}>
            <p>{item.label}</p>
            <input
              type="radio"
              name={group}
              value={item.value}
              className={inputHidden}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
