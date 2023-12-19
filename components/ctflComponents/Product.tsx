type ProductProps = {
  productImage: string;
  className?: string;
  width?: number;
  height?: number;
  altText?: string;
  productTitle?: string;
  productDescription?: string;
  price?: number;
};

export const ProductSection = ({
  width = 600,
  height = 600,
  altText,
  className,
  productTitle,
  productImage,
  productDescription,
  price,
  ...ctflProps
}: ProductProps) => {
  console.log("IMAGE URL IS === ", productImage);

  return (
    <div className="px-10 flex flex-col md:flex-row w-full gap-8">
      <div className="w-1/2">
        <img
          className={`w-full h-full ${className}`}
          src={productImage}
          alt={altText}
          width={width}
          height={height}
          {...ctflProps}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h1 className={`font-bold text-2xl mb-4 ${className}`} {...ctflProps}>
            {productTitle}
          </h1>
          <p className={`text-lg ${className}`} {...ctflProps}>
            {productDescription}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className={className} {...ctflProps}>
            £{price}
          </p>
          <button className="p-2 bg-cyan-300 rounded-lg w-1/4 hover:bg-cyan-400 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
