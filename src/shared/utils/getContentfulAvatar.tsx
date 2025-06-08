import type { IAvatars } from "~/shared/types";

export const getContentfulAvatar = (data?: IAvatars, isLight?: boolean) => {
    const avatarType = isLight
        ? "lightAvatar"
        : "avatar";
    const avatarClass = "w-full h-full";


    if (!data?.[avatarType]) {
        return <div class={avatarClass} />;
    }

    return (
        <img
            class={avatarClass}
            src={data?.[avatarType].fields.file.url}
            alt={data?.[avatarType].fields.file.fileName}
        />
    );
};