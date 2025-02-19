import { Outlet } from 'react-router-dom';

const CareGiverLayout = () => {
  return (
    <main className="h-[100svh]">
      <Outlet />
    </main>
  );
};

export default CareGiverLayout;
