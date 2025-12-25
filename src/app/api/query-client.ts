import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient(
{
    defaultOptions:
    {
        queries:
        {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 3 * 60 * 1000,
        },
    },
});

export default queryClient;