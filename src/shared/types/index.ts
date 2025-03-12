import { Document } from "@contentful/rich-text-types";

export interface IContentfulResourceFields<T> {
    fields: T;
}

export interface IContentfulResource<T> {
    items: IContentfulResourceFields<T>[];
}

interface IFile {
    url: string;
    fileName: string;
    details: {
        size: number;
        image: { width: number; height: number };
    };
}

interface IContentfulMetadata {
    title: string;
    file: IFile;
}

export interface IPost {
    title: string;
    subTitle: string;
    text: Document;
    image: IContentfulResourceFields<IContentfulMetadata>;
    minutesRead: string;
    tags: string[];
}

export interface IAbout {
    title: string;
    subTitle: string;
    aboutText: string;
    avatar: IContentfulResourceFields<IContentfulMetadata>;
}
