import Image from 'next/image';

interface TechnologyIconProps {
  name: string;
  width?: number;
  height?: number;
  className: string;
}

export function TechnologyIcon({
  name,
  width = 24,
  height = 24,
  className,
}: TechnologyIconProps) {
  const namePath = (name: string) => {
    switch (name) {
      case 'Django':
        return '/django.svg';
      case 'NextJS':
        return '/nextjs.svg';
      case 'PostgreSQL':
        return '/postgresql.svg';
      default:
        return `/${name}.svg`;
    }
  };

  const altName = (name: string) => {
    switch (name) {
      default:
        return `${name} Icon`;
    }
  };

  return (
    <Image
      src={namePath(name)}
      width={width}
      height={height}
      alt={altName(name)}
      className={className}
    />
  );
}
