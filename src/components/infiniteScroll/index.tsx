import { createEffect, JSX, onCleanup, Show } from "solid-js";

import Spinner from "~/shared/ui/spinner";

type InfiniteScrollProps = {
    onLoadMore: () => void;
    hasMore: boolean;
    options?: {
        rootMargin: `${number}px`;
        threshold: number;
    };
    children: JSX.Element;
};

const DEFAULT_ROOT_MARGIN = "100px";
const DEFAULT_THRESHOLD = 0.1;

const InfiniteScroll = (props: InfiniteScrollProps) => {
    let ref: HTMLDivElement | undefined;

    createEffect(() => {
        if (!props.hasMore) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    props.onLoadMore();
                }
            },
            {
                rootMargin: props.options?.rootMargin ?? DEFAULT_ROOT_MARGIN,
                threshold: props.options?.threshold ?? DEFAULT_THRESHOLD,
            },
        );

        if (ref) {
            observer.observe(ref);
        }

        onCleanup(() => {
            if (ref) {
                observer.unobserve(ref);
            }
        });
    });

    return (
        <>
            {props.children}
            <Show when={props.hasMore}>
                <div ref={ref}
                    class={"mt-offset8x flex items-center justify-center"}>
                    <Spinner size={"40px"} />
                </div>
            </Show>
        </>
    );
};

export default InfiniteScroll;
