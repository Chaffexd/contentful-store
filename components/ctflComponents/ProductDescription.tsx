type DescriptionProps = {
    text: string;
    className?: string;
}

export const Description = ({
    text,
    className,
    ...ctflProps
}: DescriptionProps) => {
    return (
        <p className={className} {...ctflProps}>{text}</p>
    )
}