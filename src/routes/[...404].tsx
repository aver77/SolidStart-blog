import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";

import DocumentSad from "~/shared/assets/svg/components/documentSad";
import Button from "~/shared/ui/button";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div class={`
          flex
          h-[calc(100vh-var(--spacing-headerHeight)-var(--spacing-footerHeight))]
          items-center justify-center
          px-highest ipadLg:px-offset8x ipadSm:px-offset3x
        `}>
            <Title>Not Found</Title>
            <HttpStatusCode code={404} />
            <div>
                <div>
                    <DocumentSad />
                </div>
                <h3 class="mt-offset8x phones:mt-offset6x text-2cxl font-bold">Hmmm, that didn't work</h3>
                <div class="mt-offset2x">
                    <span>
                        It seems like that page doesn't exist, but I don't want to lose you!
                    </span>
                </div>
                <div class="mt-offset8x phones:mt-offset6x">
                    <Button onClick={() => navigate("/")}>← Back to Homepage</Button>
                </div>
            </div>
        </div>
    );
}
