import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import Header from "~/components/header";

import "./globals/root.css";

export default function App() {
    return (
        <Router
            root={(props) => {
                console.log(props);
                return (
                    <MetaProvider>
                        <Header />
                        <main>
                            <Suspense>{props.children}</Suspense>
                        </main>
                    </MetaProvider>
                );
            }}
        >
            <FileRoutes />
        </Router>
    );
}
