import { InputHTMLAttributes, ReactNode  } from 'react';

export type InputSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputRoundedType = 'default' | 'rounded';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  labelClassName?: string;
  size?: InputSizeType;
  rounded?: InputRoundedType;
  icon?: ReactNode;
  label?: string;
  error?: string;
  isDirty?: boolean;
}
