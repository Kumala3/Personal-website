import Image from 'next/image';

interface MenuIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function MenuIcon({width = 24, height = 24, className=""}: MenuIconProps) {
  return (
    <Image
      className={`${className}`}
      src={"/menu-icon.svg"}
      width={width}
      height={height}
      alt="Menu Icon"
    />
  );
}
