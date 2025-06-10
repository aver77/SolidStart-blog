import type { JSX } from "solid-js";

import type { JsonLd } from "jsonld/jsonld-spec";

import { BASE_HOST } from "~/shared/api";

const JSON_LD_BASE: JsonLd = {
    "@context": "https://schema.org",
    author: {
        "@type": "Person",
        "@id": "NW",
        name: "Nikita Averochkin",
        url: BASE_HOST,
        sameAs: [
            "https://naportfolio.tech/",
            "https://nwdapp.netlify.app/",
            "https://nwtodo.netlify.app/",
            "https://nwproject.netlify.app/"
        ],
        image: `${BASE_HOST}/blogImage.png`,
        jobTitle: "Frontend Developer",
        description: "Experienced Senior Frontend Engineer and Blog owner"
    }
};

export const getJsonLD = (extraJsonLd?: JsonLd): JSX.Element => {
    return (
        <script type="application/ld+json">
            {JSON.stringify({
                ...JSON_LD_BASE,
                ...extraJsonLd || {}
            })}
        </script>
    );
};