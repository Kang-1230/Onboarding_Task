import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  const queryClient = new QueryClient();
  console.log(queryClient.getQueryCache());

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
