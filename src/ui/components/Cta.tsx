import React from 'react';
import { FaXTwitter, FaInstagram, FaWhatsapp, FaDiscord } from 'react-icons/fa6';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type Platform = 'twitter' | 'whatsapp' | 'instagram' | 'discord';

const platforms = {
  twitter: {
    icon: <FaXTwitter className="h-5 w-5" />,
    class: 'bg-black hover:bg-neutral-800', 
  },
  whatsapp: {
    icon: <FaWhatsapp className="h-5 w-5" />,
    class: 'bg-[#25D366] hover:bg-[#22bf5b]',
  },
  instagram: {
    icon: <FaInstagram className="h-5 w-5" />,
    class: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90',
  },
  discord: {
    icon: <FaDiscord className="h-5 w-5" />,
    class: 'bg-[#5865F2] hover:bg-[#4752c4]',
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
      order: {
        1: 'bottom-6',
        2: 'bottom-[calc(1.5rem+4rem)]', 
        3: 'bottom-[calc(1.5rem+8rem)]', 
        4: 'bottom-[calc(1.5rem+12rem)]',
        5: 'bottom-[calc(1.5rem+16rem)]',
      }
    },
    defaultVariants: {
      size: 'md',
      order: 1,
    },
  }
);

export interface CtaProps extends VariantProps<typeof ctaVariants> {
  platform: Platform;
  href: string;
  className?: string;
  order: 1 | 2 | 3 | 4 | 5;
}

export const Cta = ({ platform, href, size, order, className }: CtaProps) => {
  const config = platforms[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        ctaVariants({ size, order }),
        config.class,
        className
      )}
      aria-label={`Visit our ${platform}`}
    >
      {config.icon}
    </a>
  );
};

// Usage:
{/* 
<>
  Você pode alterar a ordem de acordo com o que pretende priorizar, por ex: 
  quer o whatsapp como prioridade? Coloque order={1} que será colocado no canto inferior direito
  e será o primeiro dentre os outros CTA's.

  Existem os Sizes também, em que você pode colocar, recomendo usar o "lg", é o que melhor
  se encaixa dentro da maioria de Layouts, pois tem melhor tamanho para uso em Smartphones.

  <Cta platform="twitter" href="#" order={1} size="lg" />
  <Cta platform="instagram" href="#" order={2} size="lg" />
  <Cta platform="whatsapp" href="#" order={3} size="lg" />
  <Cta platform="discord" href="#" order={4} size="lg" />
</> 
*/}