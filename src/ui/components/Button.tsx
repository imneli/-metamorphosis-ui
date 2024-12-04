import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * 🚀 Guia de uso do componente
 * 
 * Variantes de Cor:
 * - color: 'primary' | 'secondary' | 'danger' | 'success'
 * 
 * Estilos de Botão:
 * - variant: 
 *   * 'solid' (fundo colorido)
 *   * 'outline' (borda colorida, fundo transparente)
 *   * 'ghost' (apenas texto colorido)
 * 
 * Tamanhos Disponíveis:
 * - size: 
 *   * 'xs' (extra pequeno)
 *   * 'sm' (pequeno)
 *   * 'md' (médio - padrão)
 *   * 'lg' (grande)
 *   * 'xl' (extra grande)
 * 
 * Opções de Radius (Arredondamento):
 * - radius:
 *   * 'none' (sem arredondamento)
 *   * 'sm' (arredondamento pequeno)
 *   * 'md' (arredondamento médio - padrão)
 *   * 'lg' (arredondamento grande)
 *   * 'xl' (arredondamento extra grande)
 *   * 'full' (totalmente arredondado)
 * 
 * Propriedades Adicionais:
 * - glassEffect: boolean (efeito de vidro)
 * 
 * Exemplos de Uso:
 * <Button>Botão Padrão</Button>
 * <Button color="danger" variant="outline">Botão de Perigo</Button>
 * <Button size="lg" radius="full">Botão Grande Arredondado</Button>
 * <Button glassEffect color="secondary">Botão Vidro</Button>
 * 
 * Todos os atributos de botão HTML padrão também são suportados
 * como onClick, disabled, type, etc.
 */

const COLOR_VARIANTS = {
  primary: {
    solid: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-200',
    ghost: 'text-blue-500 hover:bg-blue-50 focus:ring-blue-200',
  },
  secondary: {
    solid: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-50 focus:ring-gray-200',
    ghost: 'text-gray-500 hover:bg-gray-50 focus:ring-gray-200',
  },
  danger: {
    solid: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
    outline: 'border border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-200',
    ghost: 'text-red-500 hover:bg-red-50 focus:ring-red-200',
  },
  success: {
    solid: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
    outline: 'border border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-200',
    ghost: 'text-green-500 hover:bg-green-50 focus:ring-green-200',
  },
  neutral: {
    solid: 'bg-black text-white hover:bg-black focus:ring-black',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-50 focus:ring-gray-200',
    ghost: 'text-black hover:bg-black focus:ring-black',
  }
};

const buttonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        solid: '',
        outline: '',
        ghost: '',
      },
      color: {
        primary: '',
        secondary: '',
        danger: '',
        success: '',
      },
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      }
    },
    compoundVariants: [
      ...Object.entries(COLOR_VARIANTS).flatMap(([color, variants]) => 
        Object.entries(variants).map(([variant, className]) => ({
          color,
          variant,
          className
        }))
      )
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      radius: 'md'
    }
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  glassEffect?: boolean;
}

const GlassWrapper = ({ children, className = '' }) => (
  <div 
    className={cn(
      'backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg',
      'hover:bg-white/20 transition-all duration-300',
      className
    )}
  >
    {children}
  </div>
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children,
    className,
    variant,
    color,
    size,
    radius,
    glassEffect,
    ...props
  }, ref) => {
    const Comp = 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, color, size, radius, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };