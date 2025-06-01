import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { Document } from "@contentful/rich-text-types";

const AVERAGE_WORDS_PER_MINUTE = 100;

export const getReadingTime = (
    text: string | Document,
    wordsPerMinute = AVERAGE_WORDS_PER_MINUTE
): number => {
    if (typeof text !== "string") {
        text = documentToPlainTextString(text);
    }

    return Math.ceil(text?.split(" ").length / wordsPerMinute);
};
