import Image from 'next/image';

interface GitHubIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function GitHubIcon({
  width = 24,
  height = 24,
  className = '',
}: GitHubIconProps) {
  return (
    <Image
      src={'/github-icon.svg'}
      alt="GitHub Icon"
      width={width}
      height={height}
      className={`${className}`}
    />
  );
}
