"use client";
import { client, getSingleProduct } from "@/helpers/helpers";
import Product from "@/components/Product/Product";
import { ExperienceRoot, createExperience, defineComponents, fetchers } from "@contentful/experience-builder";
import { imageComponentDefinition } from "@/components/ComponentDefinitions";
import { Image } from "@/components/ctflComponents/Image";

const experienceTypeId = "product";
const currentLocale = "en-US";

defineComponents([
  { component: Image, definition: imageComponentDefinition }
])

const getExperience = async (productId: string) => {
  try {
    const experienceEntry = await fetchers.fetchExperienceEntry({
      client: client,
      experienceTypeId,
      locale: currentLocale,
      identifier: {
        slug: productId,
      },
    });

    if (!experienceEntry) {
      console.log("404, experience not found");
      return;
    }

    const { entries, assets } = await fetchers.fetchReferencedEntities({
      client: client,
      experienceEntry,
      locale: currentLocale,
    });

    return {
      experienceEntry,
      referencedAssets: assets,
      referencedEntries: entries,
      locale: currentLocale,
    };
  } catch (error) {
    console.log("This is the catch block, something went wrong...");
  }
};

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId);

  if (!productInfo) {
    return <h1>No data found.</h1>
  }

  const data = await getExperience(productId);

  if (!data) {
    return <h1>Data is undefined.</h1>
  }

  const { experienceEntry, referencedAssets, referencedEntries, locale } = data;

  const experience = createExperience({
    experienceEntry,
    referencedAssets,
    referencedEntries,
    locale,
    mode: "delivery"
  })

  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16 mb-32">
      <ExperienceRoot experience={experience} locale={currentLocale} />
      <Product productInfo={productInfo} />
    </section>
  );
};

export default ProductDetailPage;
