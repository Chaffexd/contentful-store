import Product from "@/components/Product/Product";
import { getAllProducts, getSingleProduct } from "@/helpers/helpers";

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.items.map((product: ProductInfo) => ({
    productId: product.fields.productTitle,
  }));
}

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId);

  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16">
      <Product productInfo={productInfo} />
    </section>
  );
};

export default ProductDetailPage;
