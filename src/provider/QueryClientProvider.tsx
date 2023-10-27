import { ReactNode } from 'react';
import {QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useToast} from "@chakra-ui/react";

function QueryClientProviderConf({ children }: { children: ReactNode }) {
    const toast = useToast();
    const client = new QueryClient({
        queryCache: new QueryCache({
            onError: (err) => {
                if (err instanceof Error) {
                    toast({
                        status: 'error',
                        title: err.message,
                        position: 'top-right'
                    });
                }
            }
        })
    });
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default QueryClientProviderConf;