import Image from "next/image";

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
        productDescription: {};
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
  console.log(
    "PROD INFO",
    productInfo.items[0].fields.productImage.fields.file
  );
  const title = productInfo.items[0].fields.productTitle;
  const productDescription =
    productInfo.items[0].fields.productImage.fields.description;
  const image = productInfo.items[0].fields.productImage.fields.file.url;
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
      <div className="w-1/2">
        <h1 className="font-bold text-2xl mb-4">{title}</h1>
        <p className="text-lg">{productDescription}</p>
      </div>
    </>
  );
};

export default Product;
