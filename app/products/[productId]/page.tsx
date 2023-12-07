import Product from "@/components/Product/Product";
import { getAllProducts, getSingleProduct } from "@/helpers/helpers";

type Props = {
  params: { productId: string }
}

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.items.map((product: ProductInfo) => ({
    productId: product.fields.productTitle,
  }));
}

export async function generateMetadata({ params }: Props) {
  const productId = params.productId;

  const product = await getSingleProduct(productId);
  return {
    title: product.items[0].fields.productTitle,
    description: product.items[0].fields.productDescription.content[0].content[0].value,
  }
};

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId);

  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16 mb-32">
      <Product productInfo={productInfo} />
    </section>
  );
};

export default ProductDetailPage;
