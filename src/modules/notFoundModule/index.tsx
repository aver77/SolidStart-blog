import { useNavigate } from "@solidjs/router";

import DocumentSad from "~/shared/assets/svg/components/documentSad";
import Button from "~/shared/ui/button";

const NotFoundModule = () => {
    const navigate = useNavigate();

    return (
        <div class={`
          px-highest flex
          h-[calc(100vh-var(--spacing-headerHeight)-var(--spacing-footerHeight))]
          items-center justify-center duration-300
          ipadLg:px-offset8x
          ipadSm:px-offset3x
        `}>
            <div>
                <div>
                    <DocumentSad />
                </div>
                <h3 class="mt-offset8x text-2cxl font-bold phones:mt-offset6x">Hmmm, that didn't work</h3>
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
};

export default NotFoundModule;
