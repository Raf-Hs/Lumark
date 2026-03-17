import { FC, useMemo } from 'react';
import { ButtonRoundedType, ButtonSizeType, ButtonVariantType, IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  rounded = 'default',
  icon,
  iconPosition = 'left',
  isLoading,
  buttonClassName = '',
  buttonContainerClassName = '',
  buttonContentClassName = '',
  disabled,
  ...rest
}) => {
  const buttonSize = useMemo(() => {
    const sizeMapping: Record<ButtonSizeType, string> = {
      xs: 'px-2 py-0.5 text-sm',
      sm: 'px-3 py-1 text-base',
      md: 'px-4 py-1.5 text-lg',
      lg: 'px-5 py-2 text-xl',
      xl: 'px-6 py-3 text-2xl',
    };

    return sizeMapping[size] || sizeMapping.md;
  }, [size]);

  const buttonColor = useMemo(() => {
    const variantMapping: Record<ButtonVariantType, string> = {
      primary: 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
      secondary: 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-white',
      danger: 'bg-danger hover:bg-danger-hover active:bg-danger-active text-white', // TODO: add hover and active colors to base.css and tailwind.config.js
      success: 'bg-success hover:bg-success-hover active:bg-success-active text-white', // TODO: add hover and active colors to base.css and tailwind.config.js
      warning: 'bg-warning hover:bg-warning-hover active:bg-warning-active text-white', // TODO: add hover and active colors to base.css and tailwind.config.js
      info: 'bg-info hover:bg-info-hover active:bg-info-active text-white', // TODO: add hover and active colors to base.css and tailwind.config.js
      ghost: 'bg-transparent hover:ghost-button-hover-gray-bg active:ghost-button-active-gray-bg text-text-color', // add hover and active colors to base.css and tailwind.config.js
    };

    return variantMapping[variant] || variantMapping.primary;
  }, [variant]);

  const buttonRounded = useMemo(() => {
    const roundedMapping: Record<ButtonRoundedType, string> = {
      default: 'rounded-md',
      rounded: 'rounded-lg',
      circle: 'rounded-full',
    };

    return roundedMapping[rounded] || roundedMapping.default;
  }, [rounded]);

  return (
    <button
      className={`outline-none hover:cursor-pointer transition ${buttonSize} ${buttonColor} ${buttonRounded} ${isLoading ? 'cursor-not-allowed opacity-50' : ''} ${buttonClassName}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      <div className={`flex items-center justify-center ${buttonContainerClassName}`}>
        {icon ? (
          <>
            {iconPosition === 'left' && icon}
            <div className={`${iconPosition === 'right' ? 'ml-2' : 'mr-2'} ${buttonContentClassName}`}>
              {children}
            </div>
            {iconPosition === 'right' && icon}
          </>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

export default Button;
