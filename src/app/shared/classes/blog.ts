interface RootObject {
  items: Blog[];
}
export interface Blog {
    id?: number;
  meta?: Meta2;
  title?: string;
  subtitle?: string;
  introduction?: string;
  date_published?: string;
  image?: Image;
  tags?: string[];
  body?: Body[];
}

interface Body {
  type?: string;
  value?: Value | Value2 | Value3 | string;
  id?: string;
}

interface Value3 {
  image?: number;
  caption?: string;
  attribution?: string;
}

interface Value2 {
  heading_text?: string;
  size?: string;
}

interface Value {
  text?: string;
  attribute_name?: string;
}

interface Image {
  id?: number;
  meta?: Meta3;
  title?: string;
}

interface Meta3 {
  type?: string;
  detail_url?: string;
  download_url?: string;
}

interface Meta2 {
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


