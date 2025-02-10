import { Document } from "@contentful/rich-text-types";

interface IContentfulResourceFields<T> {
    fields: T;
}

export interface IContentfulResource<T> {
    items: IContentfulResourceFields<T>[];
}

export interface IPost {
    title: string;
    subTitle: string;
    text: Document;
    minutesRead: string;
    tags: string[];
}

interface IFile {
    url: string;
    fileName: string;
    details: {
        size: number;
        image: { width: number; height: number };
    };
}

interface IAvatar {
    title: string;
    file: IFile;
}

export interface IAbout {
    years: string;
    aboutText: string;
    avatar: IContentfulResourceFields<IAvatar>;
}
