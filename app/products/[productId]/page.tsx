import { getAllProducts, getSingleProduct } from "@/helpers/helpers";
import { ProductInfo } from "@/models/models";
import Product from "@/components/Product/Product";
import {
  useFetchExperience,
  defineComponents,
  ExperienceRoot,
  fetchers,
  createExperience,
} from "@contentful/experience-builder";
import { Image } from "@/components/ctflComponents/Image";
import { imageComponentDefinition } from "@/components/ComponentDefinitions";
import { createClient } from "contentful";
import ExperienceBuilderWrapper from "@/components/ExperienceBuilder";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const revalidate = 300;

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

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId);
  const experienceTypeId = "product";
  const currentLocale = "en-US";

  const experienceEntry = await fetchers.fetchExperienceEntry({
    client,
    experienceTypeId,
    locale: currentLocale,
    identifier: {
      slug: productId
    }
  });

  const { entries, assets } = await fetchers.fetchReferencedEntities({
    client,
    experienceEntry,
    locale: currentLocale,
  });


  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16 mb-32">
      <ExperienceBuilderWrapper
        experienceEntry={experienceEntry}
        referencedAssets={assets}
        referencedEntries={entries}
        locale={currentLocale}
        slug={productId}
      >
        <Product productInfo={productInfo} />
      </ExperienceBuilderWrapper>
    </section>
  );
};

export default ProductDetailPage;
