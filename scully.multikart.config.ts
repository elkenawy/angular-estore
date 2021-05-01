
import { ScullyConfig } from '@scullyio/scully';



export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "multikart",
  outDir: './dist/static',
  routes: {
    "/shop/product/:slug":{
        type: 'json',
      slug: {
        url: 'http://localhost:8000/api/v2/pages/?type=product.ProductDetailPage&fields=slug',
        resultsHandler: (response) => response.items.map(data => data.meta),
        property: 'slug',
      },
    },
    "/blog/:slug":{
        type: 'json',
      slug: {
        url: 'http://localhost:8000/api/v2/pages/?type=blog.BlogPage&fields=slug',
        resultsHandler: (response) => response.items.map(data => data.meta),
        property: 'slug',
      },
    }
  }
};