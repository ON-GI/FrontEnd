import DetailScheduleFormRow from './DetailScheduleFormRow';
import { dayOfWeek } from './SimpleScheduleForm';

const DetailScheduleForm = () => {
  return (
    <ul className="flex flex-col gap-3">
      {dayOfWeek.map((item) => (
        <DetailScheduleFormRow key={item.id} dayOfWeek={item.id}>
          {item.label[0]}
        </DetailScheduleFormRow>
      ))}
    </ul>
  );
};

export default DetailScheduleForm;
