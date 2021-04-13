// Products
export interface Product {
    id?: number;
    title?: string;
    description?: string;
    detail_url?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    meta?: Meta;
    category?: string;
    price?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Image2[];
}

export interface Variants {
    variant_id?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    image?: Image;
}

// export interface Images {
//     image_id?: number;
//     id?: number;
//     alt?: string;
//     src?: string;
//     variant_id?: any[];
// }


interface Image2 {
  id?: number;
  meta?: Meta2;
  image?: Image;
  caption?: string;
}

interface Image {
  id?: number;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface Meta2 {
  type?: string;
}

interface Meta {
  type?: string;
  detail_url?: string;
  html_url?: string;
  slug?: string;
  show_in_menus?: boolean;
  seo_title?: string;
  search_description?: string;
  first_published_at?: string;
  locale?: string;
}