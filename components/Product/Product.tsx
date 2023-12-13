"use client";
import Image from "next/image";
import useStore from "../store/store";
import { Metadata, Sys } from "@/models/models";

type ProductInfoProps = {
  productInfo: {
    sys: Sys;
    total: number;
    skip: number;
    limit: number;
    items: Array<{
      metadata: Metadata;
      sys: Sys;
      fields: {
        productTitle: string;
        slug: string;
        price: number;
        productDescription: {
          data: {};
          content: Array<{
            data: {};
            content: Array<{
              data: {};
              marks: [];
              value: string;
              nodeType: string;
            }>;
            nodeType: string;
          }>;
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
    }>;
    includes: {};
  };
};

const Product = ({ productInfo }: ProductInfoProps) => {
  const title = productInfo?.items[0]?.fields.productTitle;
  const productDescription =
    productInfo?.items[0].fields.productDescription.content[0].content[0].value;
  const price = productInfo?.items[0].fields.price.toLocaleString("en-US", {
    style: "currency",
    currency: "GBP",
  });
  const image = productInfo?.items[0].fields.productImage.fields.file.url;

  const addToCart = useStore((state) => state.addToCart);
  
  const currentCart = useStore((state) => state.cart);
  console.log("THE CART:===", currentCart)

  const addProductHandler = () => {
    addToCart({
      title: title,
      price: productInfo.items[0].fields.price,
      image: image,
      quantity: 1
    })
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
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-2xl mb-4">{title}</h1>
          <p className="text-lg">{productDescription}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{price}</p>
          <button className="p-2 bg-cyan-300 rounded-lg w-1/4 hover:bg-cyan-400 text-white" onClick={addProductHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
