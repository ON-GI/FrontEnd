import { Outlet } from 'react-router-dom';
import { WorkConditionFormProvider } from '../../../components/WorkConditionForm/WorkConditionFormProvider';

const WorkConditionPage = () => {
  return (
    <main>
      <WorkConditionFormProvider>{<Outlet />}</WorkConditionFormProvider>
    </main>
  );
};

export default WorkConditionPage;
