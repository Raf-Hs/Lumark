import { FC, useMemo } from 'react';
import { IInputProps, InputRoundedType, InputSizeType } from './types';

const Input: FC<IInputProps> = ({
  label,
  wrapperClassName = '',
  labelClassName = '',
  size = 'sm',
  rounded = 'default',
  icon,
  iconPosition = 'right',
  error,
  isDirty,
  className = '',
  ...props
}) => {
  const inputSize = useMemo(() => {
    if (icon) {
      const iconSizeMapping: Record<InputSizeType, string> = {
        xs: `${iconPosition === 'left' ? 'pl-8 pr-2' : 'pl-2 pr-8'} py-0.5 text-xs`,
        sm: `${iconPosition === 'left' ? 'pl-8 pr-3' : 'pl-3 pr-8'} py-1 text-sm`,
        md: `${iconPosition === 'left' ? 'pl-8 pr-4' : 'pl-4 pr-8'} py-1.5 text-base`,
        lg: `${iconPosition === 'left' ? 'pl-8 pr-5' : 'pl-5 pr-8'} py-2 text-lg`,
        xl: `${iconPosition === 'left' ? 'pl-8 pr-6' : 'pl-6 pr-8'} py-3 text-xl`,
      };

      return iconSizeMapping[size] || iconSizeMapping.md;
    }

    const sizeMapping: Record<InputSizeType, string> = {
      xs: 'px-2 py-0.5 text-xs', // not stable, need to adjust padding to accommodate icon
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-1.5 text-base',
      lg: 'px-5 py-2 text-lg',
      xl: 'px-6 py-3 text-xl', // not stable, need to adjust padding to accommodate icon
    };

    return sizeMapping[size] || sizeMapping.md;
  }, [size]);

  const inputRounded = useMemo(() => {
    const roundedMapping: Record<InputRoundedType, string> = {
      default: 'rounded-md',
      rounded: 'rounded-lg',
    };

    return roundedMapping[rounded] || roundedMapping.default;
  }, [rounded]);

  const inputRingAndBorderColor = useMemo(() => {
    if (error) {
      return 'focus:ring-danger/20 focus:ring-danger border-danger hover:ring-danger/20';
    }

    // if (isDirty) {
    //   return 'focus:ring-success/20 focus:ring-success focus:border-success hover:ring-success/20';
    // }

    return 'focus:ring-primary/20 focus:ring-primary focus:border-primary hover:ring-primary/20';
  }, [error]);

  return (
    <div className={`w-full flex items-center relative ${wrapperClassName}`}>
      <input
        className={`outline-none border border-border-color hover:ring-3 focus:ring-3 transition w-full ${inputRingAndBorderColor} ${inputSize} ${inputRounded} ${className}`}
        {...props}
      />
      {icon && (
        <div className={`absolute top-1/2 transform -translate-y-1/2 ${iconPosition === 'left' ? 'left-2' : 'right-2'}`}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
