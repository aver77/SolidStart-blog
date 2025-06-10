import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

import NotFoundModule from "~/modules/notFoundModule";

const NotFoundPage = () => {
    return (
        <>
            <Title>NW Blog | Not Found</Title>
            <HttpStatusCode code={404} />
            <NotFoundModule/>
        </>
    );
};

export default NotFoundPage;