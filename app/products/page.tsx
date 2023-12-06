import Gallery from "../../components/Gallery/Gallery";
import { getProductsPage } from "../../helpers/helpers";

const ProductPage = async () => {
  const productPage = await getProductsPage();
  const products = productPage.fields.products;
  
  return (
    <section className="w-full">
      <h1 className="text-center text-3xl">Our Products</h1>
      <Gallery products={products} />
    </section>
  );
};

export default ProductPage;
