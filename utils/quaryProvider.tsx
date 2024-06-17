"use client"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient()
export  function ReactQuearyProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
        
    );
}
export default function RecoilContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
}