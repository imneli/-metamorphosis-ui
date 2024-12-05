import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import React, { FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "solid" | "outline" | "ghost" | "link" | null | undefined;
    color?: "default" | "primary" | "secondary" | "danger" | "success" | "warning" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const inputVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type InputPropsWithoutSize = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
interface InputProps extends InputPropsWithoutSize, VariantProps<typeof inputVariants> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const badgeVariants: (props?: ({
    variant?: "solid" | "outline" | "ghost" | "glass" | null | undefined;
    color?: "default" | "danger" | "success" | "warning" | "black" | "violet" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
    className?: string;
}
declare const Badge: FC<BadgeProps>;

interface SeparatorProps extends React.HTMLProps<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}
declare const Separator: React.FC<SeparatorProps>;

declare const headerVariants: (props?: ({
    variant?: "default" | "transparent" | "colored" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    position?: "fixed" | "static" | "sticky" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface HeaderOneProps extends VariantProps<typeof headerVariants> {
    logo?: React.ReactNode;
    navigation?: React.ReactNode[];
    actions?: React.ReactNode[];
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    dark?: boolean;
}
declare const HeaderOne: React.FC<HeaderOneProps>;

type Platform = 'twitter' | 'whatsapp' | 'instagram' | 'discord';
declare const ctaVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    order?: 1 | 2 | 3 | 4 | 5 | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface CtaProps extends VariantProps<typeof ctaVariants> {
    platform: Platform;
    href: string;
    className?: string;
    order: 1 | 2 | 3 | 4 | 5;
}
declare const Cta: ({ platform, href, size, order, className }: CtaProps) => React.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

declare const preset: {
    content: string[];
    theme: {
        extend: {};
    };
};

export { Badge, type BadgeProps, Button, type ButtonProps, Cta, type CtaProps, HeaderOne, type HeaderOneProps, Input, type InputProps, Separator, type SeparatorProps, badgeVariants, buttonVariants, cn, preset as default, inputVariants };
