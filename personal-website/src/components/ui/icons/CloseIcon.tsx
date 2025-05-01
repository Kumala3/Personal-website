import Image from 'next/image';

interface CloseIconProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function CloseIcon({width = 24, height = 24, className = ""}: CloseIconProps) {
  return (
    <Image
        className={`${className}`}
      src={'/close-icon.svg'}
      width={width}
      height={height}
      alt="Close Icon"
    />
  );
}
