import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

import Footer from "~/components/footer";
import Header from "~/components/header";
import WithTheme from "~/shared/providers/withTheme";

import "./globals/root.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            experimental_prefetchInRender: true,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router
                root={(props) => {
                    return (
                        <MetaProvider>
                            <WithTheme>
                                <Header />
                                <main class="main-container">
                                    <Suspense fallback={<div class="h-screen" />}>
                                        {props.children}
                                    </Suspense>
                                </main>
                                <Footer />
                            </WithTheme>
                        </MetaProvider>
                    );
                }}
            >
                <FileRoutes />
            </Router>
        </QueryClientProvider>
    );
}
