import React from 'react';

const InformationList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-2 font-medium">{children}</ul>;
};

export default InformationList;
