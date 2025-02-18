import React from 'react';

const InformationRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-2">{children}</div>;
};

export default InformationRow;
