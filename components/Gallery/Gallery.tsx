import { Sys } from "@/models/models";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    productTitle: string;
    productDescription: {};
    category: Array<{
      type: string;
      linkType: string;
      id: string;
    }>;
    productImage: {
      metadata: Metadata;
      sys: Sys;
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: {};
          fileName: string;
          contentType: string;
        };
      };
    };
  };
};

const Gallery = ({ products }: { products: ProductProps[] }) => {
  // console.log("PRODUCT RESPONSE", products[0].fields.productImage);

  // console.log('CATEGORYS', products[2].fields)

  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 px-16">
      {products.map((product) => (
        <Link
          key={product.sys.id}
          href={`/products/${product.fields.productTitle.toLowerCase().replace(/\s+/g, '-')}`}
          className="w-full h-full relative"
        >
          <div className="w-full h-full relative">
            <Image
              src={`https:${product.fields.productImage.fields.file.url}`}
              width={500}
              height={500}
              className="w-full h-5/6 rounded-md shadow-md"
              alt={product.fields.productImage.fields.description}
            />
            <div>
              <h1 className="font-bold text-2xl">
                {product.fields.productTitle}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
