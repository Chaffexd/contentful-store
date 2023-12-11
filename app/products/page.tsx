import Gallery from "../../components/Gallery/Gallery";
import { getProductsPage } from "../../helpers/helpers";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkyMasters Aviation Products | Contentful',
  description: 'At SkyMasters Aviation, our passion for aviation takes flight, celebrating the rich history and cutting-edge technology that defines the world of aircraft. Step into the realm where the sky is not the limit but the beginning of a thrilling journey through time and innovation.',
}

const ProductPage = async () => {
  const productPage = await getProductsPage();
  const products = productPage.fields.products;

  // this is for the categories
/*   const prods = await getProductsPageEntries();
  console.log("PROD PAGE", prods.items[1].fields.category[0].fields.name) */
  
  return (
    <section className="w-full">
      <h1 className="text-center text-3xl mt-8">Our Products</h1>
      <Gallery products={products} />
    </section>
  );
};

export default ProductPage;
