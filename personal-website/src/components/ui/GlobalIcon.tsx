import Image from "next/image";

interface GlobalIconProps {
    width?: number;
    height?: number;
    className?: string;
}

export function GlobalIcon({width = 24, height = 24, className = ""}: GlobalIconProps) {
    return (
        <>
            <Image src={"/"} className={`${className}`} width={width} height={height} alt="Global Icon" />
        </>
    )
}
