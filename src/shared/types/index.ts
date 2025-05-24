import { Document } from "@contentful/rich-text-types";

export interface IContentfulResourceFields<T> {
    fields: T;
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    };
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
    id: string;
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
    lightAvatar?: IContentfulResourceFields<IContentfulMetadata>;
    name: string;
}
