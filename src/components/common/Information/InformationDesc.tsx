import React from 'react';

const InformationDesc = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-medium">{children}</span>;
};

export default InformationDesc;
