import React from 'react';
import { FaXTwitter, FaInstagram, FaWhatsapp, FaDiscord } from 'react-icons/fa6';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type Platform = 'twitter' | 'whatsapp' | 'instagram' | 'discord';

const platforms = {
  twitter: {
    icon: <FaXTwitter className="h-5 w-5" />,
    class: 'bg-black hover:bg-neutral-800 mt-2', 
  },
  whatsapp: {
    icon: <FaWhatsapp className="h-5 w-5" />,
    class: 'bg-[#25D366] hover:bg-[#22bf5b] mt-2',
  },
  instagram: {
    icon: <FaInstagram className="h-5 w-5" />,
    class: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 mt-2',
  },
  discord: {
    icon: <FaDiscord className="h-5 w-5" />,
    class: 'bg-[#5865F2] hover:bg-[#4752c4] mt-2',
  },
} as const;

const ctaVariants = cva(
  [
    'inline-flex items-center justify-center rounded-full text-white',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'shadow-lg hover:shadow-xl hover:scale-110',
    'fixed right-6 z-50', 
  ],
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-14 w-14',
      },
      position: {
        1: 'bottom-6', 
        2: 'bottom-[5.5rem]', 
        3: 'bottom-[10rem]', 
        4: 'bottom-[14.5rem]', 
      }
    },
    defaultVariants: {
      size: 'md',
      position: 1,
    },
  }
);

interface CtaProps extends VariantProps<typeof ctaVariants> {
  platform: Platform;
  href: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Cta = ({ platform, href, size, className }: CtaProps) => {
  const config = platforms[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        ctaVariants({ size }),
        config.class,
        'hover:scale-110',
        className
      )}
      aria-label={`Visit our ${platform}`}
    >
      {config.icon}
    </a>
  );
};

interface CtaContainerProps {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  position: 'bottom-right' | 'bottom-left';
}

export const CtaContainer = ({ 
  children, 
  spacing = 'md',
  position = 'bottom-right'
}: CtaContainerProps) => {
  const spacingClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  };

  const positionClasses = {
    'bottom-right': 'right-4 sm:right-6',
    'bottom-left': 'left-4 sm:left-6',
  };

  return (
    <div className={cn(
      'fixed bottom-4 sm:bottom-6 z-50',
      positionClasses[position],
      'flex flex-col-reverse',
      spacingClasses[spacing]
    )}>
      {children}
    </div>
  );
};

// Exemplo:
{/* 
<CtaContainer spacing="md">
  <Cta platform="twitter" href="https://twitter.com/username" />
  <Cta platform="instagram" href="https://instagram.com/username" />
  <Cta platform="whatsapp" href="https://wa.me/1234567890" />
  <Cta platform="discord" href="https://discord.gg/invite" />
</CtaContainer>
*/}