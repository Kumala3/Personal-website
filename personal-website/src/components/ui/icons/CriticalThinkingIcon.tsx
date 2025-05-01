import Image from 'next/image';

interface CriticalThinkingIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function CriticalThinkingIcon({
  width = 24,
  height = 24,
  className = '',
}: CriticalThinkingIconProps) {
  return (
    <Image
      src={'/critical-thinking.svg'}
      width={width}
      height={height}
      alt="Critical Thinking Icon"
      className={`${className}`}
    />
  );
}
