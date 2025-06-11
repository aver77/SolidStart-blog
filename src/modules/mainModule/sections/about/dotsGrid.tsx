import { For } from "solid-js";

const dotsData = Array(500).fill(undefined);

const Dots = () => {
    return (
        <div class={`
          top-offset3x bottom-offset3x absolute right-[96px] z-1 grid
          grid-cols-[repeat(25,1fr)] overflow-hidden
          ipadLg:!right-offset8x
          ipadSm:!left-offset3x
        `}>
            <For each={dotsData}>
                {(_) => {
                    return (
                        <div class={`
                          p-offset2x group h-fit cursor-crosshair rounded-md
                          transition duration-300
                          hfa:bg-gray
                          light:hfa:bg-warmDWhite
                        `}>
                            <div class={`
                              h-offset2x w-offset2x from-dark rounded-full
                              bg-linear-to-b to-white opacity-35
                              light:opacity-100 light:from-warmDWhite
                              light:to-warmWhite light:group-hfa:from-warmDWhite
                              light:group-hfa:to-gold
                              group-hfa:from-dark group-hfa:to-gold
                              group-hfa:opacity-100
                            `} />
                        </div>
                    );
                }}
            </For>
        </div>
    );
};

export default Dots;
