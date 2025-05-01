import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import DocumentSad from "~/shared/assets/svg/components/documentSad";
import Button from "~/shared/ui/button";
import { useNavigate } from "@solidjs/router";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div class="h-[calc(100vh-var(--spacing-headerHeight)-var(--spacing-footerHeight))] flex items-center justify-center">
            <Title>Not Found</Title>
            <HttpStatusCode code={404} />
            <div>
                <div>
                    <DocumentSad />
                </div>
                <h3 class="text-2xl font-bold mt-offset8x">
                    Hmmm, that didn't work
                </h3>
                <div class="mt-offset2x">
                    <span>
                        It seems like that page doesn't exist, but I don't want
                        to lose you!
                    </span>
                </div>
                <div class="mt-offset8x">
                    <Button onClick={() => navigate("/")}>
                        ← Back to Homepage
                    </Button>
                </div>
            </div>
        </div>
    );
}
