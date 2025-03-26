import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import {
    createQuery,
    QueryClient,
    QueryClientProvider
} from "@tanstack/solid-query";

const queryClient = new QueryClient();

import Header from "~/components/header";
import Footer from "~/components/footer";

import "./globals/root.css";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router
                root={(props) => {
                    return (
                        <MetaProvider>
                            <Header />
                            <main class="main-container">
                                <Suspense fallback={<div class="h-screen" />}>
                                    {props.children}
                                </Suspense>
                            </main>
                            <Footer />
                        </MetaProvider>
                    );
                }}
            >
                <FileRoutes />
            </Router>
        </QueryClientProvider>
    );
}
