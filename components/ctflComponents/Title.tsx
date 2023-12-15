type TitleProps = {
    title: string;
    className?: string;
}

export const Title = ({
    title,
    className,
    ...ctflProps
}: TitleProps) => {
    return (
        <h1 className={className} {...ctflProps}>{title}</h1>
    )
}