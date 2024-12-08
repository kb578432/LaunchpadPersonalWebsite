import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const AppContextQuery = ({children}: PropsWithChildren) => {
  const queryClient = new QueryClient();
  
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default AppContextQuery;
