import { PropsWithChildren, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariantType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'ghost';
export type ButtonRoundedType = 'default' | 'rounded' | 'circle';
export type ButtonIconPositionType = 'left' | 'right';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  rounded?: ButtonRoundedType;
  icon?: ReactNode;
  iconPosition?: ButtonIconPositionType;
  isLoading?: boolean;
  buttonClassName?: string;
  buttonContainerClassName?: string;
  buttonContentClassName?: string;
}
