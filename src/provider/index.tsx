import React from 'react';

import QueryProvider from './QueryProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Provider;
