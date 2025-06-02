import { JSX, createEffect, onCleanup, Show } from "solid-js";

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
                console.log(entry);

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
                <div ref={ref} />
            </Show>
        </>
    );
};

export default InfiniteScroll;
