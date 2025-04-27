import Image from "next/image";

interface EyeIconProps {
    width?: number;
    height?: number;
    className?: string;
}

export function EyeIcon({width = 24, height = 24, className = ""}: EyeIconProps) {
    return (
        <Image src={"/eye-icon.svg"} width={width} height={height} alt="Eye Icon" className={`${className}`}/>
    )
}
