'use client';

import Image from 'next/image';
import { logoConfig } from '../../config/logo.config';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = '', size = 'medium' }: LogoProps) => {
  // Use base dimensions from config
  const baseWidth = logoConfig.primary.width;
  const baseHeight = logoConfig.primary.height;

  // Scale factors for different sizes - mobile-first approach
  const scaleFactors = {
    small: 0.8, // 80% of base size (128x42)
    medium: 1, // 100% of base size (160x53)
    large: 1.2, // 120% of base size (192x64)
  };

  const scale = scaleFactors[size];
  const width = baseWidth * scale;
  const height = baseHeight * scale;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: width,
        height: height,
      }}
    >
      <Image
        src={logoConfig.primary.src}
        alt={logoConfig.primary.alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
