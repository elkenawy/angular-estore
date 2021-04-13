export interface Home {
   id?: number;
    meta?: ItemMeta;
    title?: string;
    banner_title?: string;
    banner_subtitle?: string;
    banner_image?: Image;
    carousel_images?: CarouselImage[];
    category_banner?: CarouselImage[];
}

export interface Image {
    id?: number;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}

export interface CarouselImage {
    id?: number;
    meta?: CarouselImageMeta;
    carousel_image?: Image;
    content?: Content[];
    image?: Image;
}

export interface Content {
    type?: string;
    value?: Value;
    id?: string;
}

export interface Value {
    title?: string;
    text?: string;
    button_url?: string;
    button_text?: string;
}

export interface CarouselImageMeta {
    type?: string;
}

export interface ItemMeta {
    type?: string;
    detail_url?: string;
    html_url?: string;
    slug?: string;
    show_in_menus?: boolean;
    seo_title?: string;
    search_description?: string;
    first_published_at?: Date;
    locale?: string;
}