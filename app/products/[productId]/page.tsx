"use client";
import { client, getSingleProduct } from "@/helpers/helpers";
import Product from "@/components/Product/Product";
import {
  ExperienceRoot,
  createExperience,
  defineComponents,
  fetchers,
} from "@contentful/experience-builder";
import {
  descriptionComponentDefinition,
  imageComponentDefinition,
  priceComponentDefinition,
  titleComponentDefinition,
} from "@/components/ComponentDefinitions";
import { Image } from "@/components/ctflComponents/Image";
import { Title } from "@/components/ctflComponents/Title";
import { Description } from "@/components/ctflComponents/ProductDescription";
import { Price } from "@/components/ctflComponents/Price";
import { ContentfulLivePreview } from "@contentful/live-preview";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

const experienceTypeId = "newProduct";
const currentLocale = "en-US";

ContentfulLivePreview.init({
  locale: currentLocale,
  enableInspectorMode: true,
  enableLiveUpdates: true,
  debugMode: false,
});

defineComponents([
  { component: Image, definition: imageComponentDefinition },
  { component: Title, definition: titleComponentDefinition },
  { component: Description, definition: descriptionComponentDefinition },
  { component: Price, definition: priceComponentDefinition },
]);

const getExperience = async (productId: string) => {
  console.log("PRODUCT ID ===", productId);
  try {
    const experienceEntry = await fetchers.fetchExperienceEntry({
      client: client,
      experienceTypeId,
      locale: currentLocale,
      identifier: {
        slug: productId,
      },
    });
    console.log("EXPERIENCE ENTRY ===", experienceEntry);

    if (!experienceEntry) {
      console.log("404, experience not found");
      return;
    }

    const { entries, assets } = await fetchers.fetchReferencedEntities({
      client: client,
      experienceEntry,
      locale: currentLocale,
    });

    console.log("ENTRIES", entries);
    console.log("ASSETS", assets);

    return {
      experienceEntry,
      referencedAssets: assets,
      referencedEntries: entries,
      slug: productId,
      locale: currentLocale,
    };
  } catch (error) {
    console.log("This is the catch block, something went wrong...", error);
  }
};

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productId = params.productId;
  const productInfo = await getSingleProduct(productId); // this works using JS SDK
  const data = await getExperience(productId); // this is EB
  console.log("EXPERIENCE BUILDER", data);

  if (!data) {
    return <h1>Data is undefined.</h1>;
  }

  const { experienceEntry, referencedAssets, referencedEntries, locale } = data;

  const experience = createExperience({
    experienceEntry,
    referencedAssets,
    referencedEntries,
    locale,
    mode: "preview",
  });

  return (
    <section className="px-20 pt-10 flex flex-col md:flex-row w-full gap-8 mt-16 mb-32">
      {/* <ExperienceRoot experience={experience} locale={currentLocale} /> */}
      <ContentfulLivePreviewProvider locale={currentLocale}>
        <Product productInfo={productInfo} />
      </ContentfulLivePreviewProvider>
    </section>
  );
};

export default ProductDetailPage;
