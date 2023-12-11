import Product from "@/components/Product/Product";
import { getAllProducts, getSingleProduct } from "@/helpers/helpers";
import { ProductInfo } from "@/models/models";
import { createClient } from "contentful";
import {
  createExperience,
  fetchers,
  ExperienceRoot,
  useFetchExperience,
  defineComponents,
} from "@contentful/experience-builder";
// components to register for EB
import { Image } from "@/components/ctflComponents/Image";
import { imageComponentDefinition } from "@/components/ComponentDefinitions";

defineComponents([
  { component: Image, definition: imageComponentDefinition }
])

type Props = {
  params: { productId: string };
};

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.items.map((product: ProductInfo) => ({
    productId: product.fields.productTitle.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: Props) {
  const productId = params.productId;

  const product = await getSingleProduct(productId);
  return {
    title: product.items[0].fields?.productTitle,
    description:
      product.items[0].fields?.productDescription?.content[0].content[0].value,
  };
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY ?? "",
});

const experienceTypeId = "product";

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId);

  // Experience builder
  const currentLocale = "en-US";

  const { fetchBySlug, experience } = useFetchExperience({
    client,
    mode: "delivery",
  });

  try {
    const experience = await fetchBySlug({
      slug: productId,
      localeCode: currentLocale,
      experienceTypeId,
    });

    if (!experience) {
      // do some errors init
    }
  } catch (error) {
    // more errors init
  }

  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16 mb-32">
      <ExperienceRoot experience={experience} locale={currentLocale} />
      <Product productInfo={productInfo} />
    </section>
  );
};

export default ProductDetailPage;
