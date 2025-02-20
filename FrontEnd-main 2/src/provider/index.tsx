import React from 'react';

import QueryProvider from './QueryProvider';
import { CookiesProvider } from 'react-cookie';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CookiesProvider>
      <QueryProvider>{children}</QueryProvider>
    </CookiesProvider>
  );
};

export default Provider;
