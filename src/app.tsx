import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import Header from "~/components/header";
import Footer from "~/components/footer";

import "./globals/root.css";

export default function App() {
    return (
        <Router
            root={(props) => {
                return (
                    <MetaProvider>
                        <Header />
                        <main class="main-layout">
                            <div class="main-container">
                                <Suspense>{props.children}</Suspense>
                            </div>
                        </main>
                        <Footer />
                    </MetaProvider>
                );
            }}
        >
            <FileRoutes />
        </Router>
    );
}
