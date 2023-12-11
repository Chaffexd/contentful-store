type ImageProps = {
  imageUrl: string;
  className?: string;
  width?: number;
  height?: number;
  altText?: string;
};

export const Image = ({
  imageUrl,
  width = 600,
  height = 600,
  altText,
  className,
  ...ctflProps
}: ImageProps) => {
  return (
    <img
      className={className}
      src={imageUrl}
      alt={altText}
      width={width}
      height={height}
      {...ctflProps}
    />
  );
};
