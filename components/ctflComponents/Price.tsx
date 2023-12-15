type PriceProps = {
  price: string;
  className?: string;
};

export const Price = ({ price, className, ...ctflProps }: PriceProps) => {
  return (
    <p className={className} {...ctflProps}>
      {price}
    </p>
  );
};
