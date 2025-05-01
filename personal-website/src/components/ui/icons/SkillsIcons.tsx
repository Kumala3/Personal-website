import Image from 'next/image';

interface SkillIconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export function SkillIcon({
  name,
  width = 24,
  height = 24,
  className = '',
}: SkillIconProps) {
  console.log(`Name gotten in SkillIcon func: ${name}`);

  const namePath = (name: string) => {
    switch (name) {
      case 'Critical Thinking':
        return '/critical-thinking.svg';
      case 'Problem Solving':
        return '/problem-solving.svg';
      case 'Time Management':
        return '/time-management.svg';
      case 'Efficient Communication':
        return '/efficient-communication.svg';
      default:
        return `/${name}.svg`;
    }
  };

  const altName = (name: string) => {
    switch (name) {
      case 'Critical Thinking':
        return 'Critical Thinking Icon';
      case 'Problem Solving':
        return 'Problem Solving Icon';
      case 'Time Management':
        return 'Time Management Icon';
      case 'Efficient Communication':
        return 'Efficient Communication Icon';
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
