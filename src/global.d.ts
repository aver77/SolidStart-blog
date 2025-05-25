/// <reference types="@solidjs/start/env" />

declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}
