import type { JSX } from "solid-js";
import type { JsonLd } from "jsonld/jsonld-spec";

const JSON_LD_BASE: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://naportfolio.tech",
    name: "NAProject"
}

export const getJsonLD = (extraJsonLd?: JsonLd): JSX.Element => {
    return (
        <script type="application/ld+json">
            {JSON.stringify({
                ...JSON_LD_BASE,
                ...(extraJsonLd || {})
            })}
        </script>
    );
};