import React from 'react';
import InformationRow from './InformationRow';
import InformationTitle from './InformationTitle';
import InformationList from './InformationList';
import InformationDesc from './InformationDesc';

const Information = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-5 rounded-lg bg-gray-50 p-5">{children}</div>;
};

export default Information;

Information.Row = InformationRow;
Information.Title = InformationTitle;
Information.List = InformationList;
Information.Desc = InformationDesc;
