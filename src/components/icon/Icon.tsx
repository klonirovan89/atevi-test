type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    className?: string;
};

export const Icon = ({ iconId, width, height, viewBox, className }: IconProps) => {
    return (
        <svg
            className={className}
            width={width ?? '50'}
            height={height ?? '50'}
            viewBox={viewBox ?? '0 0 50 50'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`/icons-sprite.svg#${iconId}`}/>
        </svg>
    );
};