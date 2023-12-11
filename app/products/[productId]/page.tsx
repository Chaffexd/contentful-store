import { getSingleProduct } from "@/helpers/helpers";
import Product from "@/components/Product/Product";


const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId);
  
  const experienceTypeId = "product";
  const currentLocale = "en-US";

  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16 mb-32">
      <Product productInfo={productInfo} />
    </section>
  );
};

export default ProductDetailPage;
