import { type Component, createMemo, type JSX, splitProps } from "solid-js";

import cx from "classnames";

export enum ButtonTypes {
    FILLED = "FILLED",
    OUTLINED = "OUTLINED",
}

interface IButton extends JSX.HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element;
    type?: ButtonTypes;
    disabled?: boolean;
}
const Button: Component<IButton> = (props) => {
    const [localProps, restProps] = splitProps(props, [
        "children",
        "type",
        "disabled",
        "class",
    ]);
    
    const type = createMemo(() => props.type || ButtonTypes.FILLED);

    return (
        <button
            class={cx(
                `
                  px-offset4x py-offset3x text-cbase rounded-base cursor-pointer
                  border border-solid transition-[background-size] duration-300
                  ease-in-out
                  ipadLg:!px-offset3x ipadLg:!py-offset2x ipadLg:!text-csm
                  [background-size:0_100%]
                `,
                localProps.disabled && "bg-disabled border-disabled",
                type() === ButtonTypes.FILLED
                    ? `
                      border-gold text-dark bg-gold from-dark to-dark
                      bg-linear-to-r bg-no-repeat
                      hfa:text-gold hfa:[background-size:100%_100%]
                      light:border-warmGold light:text-white light:bg-warmGold
                      light:from-warmWhite light:to-warmWhite
                      light:hfa:text-warmGold
                    `
                    : `
                      border-gold text-gold bg-dark from-gold to-gold
                      bg-linear-to-r bg-no-repeat
                      hfa:[background-size:100%_100%] hfa:text-dark
                      light:border-warmBrown light:text-warmBrown
                      light:bg-warmWhite light:from-warmGold light:to-warmGold
                      light:hfa:text-white light:hfa:border-warmGold
                    `,
                localProps.class,
            )}
            {...restProps}
        >
            {localProps.children}
        </button>
    );
};

export default Button;
