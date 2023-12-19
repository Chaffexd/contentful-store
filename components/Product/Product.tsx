"use client";
import Image from "next/image";
import useStore from "../store/store";
import { Metadata, Sys } from "@/models/models";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";

type Item = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    productTitle: string;
    slug: string;
    price: number;
    productDescription: {
      data: {};
      content: {
        data: {};
        content: {
          data: {};
          marks: [];
          value: string;
          nodeType: string;
        }[];
        nodeType: string;
      }[];
      nodeType: string;
    };
    category: [];
    productImage: {
      metadata: Metadata;
      sys: Sys;
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
  };
};
type ProductInfoProps = {
  productInfo: {
    sys: Sys;
    total: number;
    skip: number;
    limit: number;
    items: Item[];
    includes: {};
  };
};

const Product = ({ productInfo }: ProductInfoProps) => {
  const inspectorProps = useContentfulInspectorMode();
  const data = useContentfulLiveUpdates(productInfo);

  console.log("DATA === ", productInfo)
  
  const title = data.items[0]?.fields.productTitle;
  const productDescription =
    data.items[0].fields.productDescription.content[0].content[0].value;
  const price = data.items[0].fields.price.toLocaleString("en-US", {
    style: "currency",
    currency: "GBP",
  });
  const image = data.items[0].fields.productImage.fields.file.url;

  const addToCart = useStore((state) => state.addToCart);

  const currentCart = useStore((state) => state.cart);
  console.log("THE CART ===", currentCart);

  const addProductHandler = () => {
    addToCart({
      title: title,
      price: productInfo.items[0].fields.price,
      image: image,
      quantity: 1,
    });
  };

  return (
    <>
      <div className="w-1/2">
        <Image
          src={`https:${image}`}
          alt={`A photo of a ${title}`}
          width={600}
          height={600}
          className="w-full h-full"
          {...inspectorProps({
            fieldId: "productImage",
            entryId: productInfo.items[0].sys.id
          })}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h1 {...inspectorProps({
            fieldId: "productTitle",
            entryId: productInfo.items[0].sys.id
          })} className="font-bold text-2xl mb-4">{title}</h1>
          <p {...inspectorProps({
            fieldId: "productDescription",
            entryId: productInfo.items[0].sys.id
          })} className="text-lg">{productDescription}</p>
        </div>
        <div className="flex justify-between items-center">
          <p {...inspectorProps({
            fieldId: "price",
            entryId: productInfo.items[0].sys.id
          })}>{price}</p>
          <button
            className="p-2 bg-cyan-300 rounded-lg w-1/4 hover:bg-cyan-400 text-white"
            onClick={addProductHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
