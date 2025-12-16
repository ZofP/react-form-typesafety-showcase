import { ReactNode } from 'react';
import {
  AutocompleteProps as MuiAutocompleteProps,
  ButtonProps as MuiButtonProps,
  CheckboxProps,
  OutlinedInputProps,
  RadioGroupProps as MuiRadioGroupProps,
  SelectProps as MuiSelectProps,
} from '@mui/material';

export type ButtonType = 'primary' | 'secondary' | 'link' | 'neutral';
export type ButtonSize = 'small' | 'large' | 'medium';

export interface ButtonProps extends Omit<MuiButtonProps, 'size' | 'color'> {
  size?: ButtonSize;
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  buttonType?: ButtonType;
}

export interface InputSelectItemProps {
  label: string;
  value: string;
}

export type InputSelectProps<T = string> = Omit<
  MuiSelectProps<T>,
  'label' | 'defaultValue'
> & {
  items: InputSelectItemProps[];
  width?: number;
  name: string;
  height?: number;
  label?: string;
  placeholder?: string;
  flex?: boolean;
  helperText?: string;
  isError?: boolean;
};

export type MultipleSelectAdditionalProps = {
  handleRemove: (value: string) => void;
};

interface RadioGroupItem {
  label: string;
  value: string | boolean;
}

export interface RadioGroupProps extends MuiRadioGroupProps {
  items: RadioGroupItem[];
  name: string;
  label?: string;
  flex?: boolean;
  disabled?: boolean;
}

export interface AutocompleteProps
  extends Omit<
    MuiAutocompleteProps<unknown, boolean, boolean, boolean, 'div'>,
    'renderInput'
  > {
  name: string;
  placeholder?: string;
  label?: string;
  helperText?: string;
  isError?: boolean;
}

export type TextFieldProps = Omit<
  OutlinedInputProps,
  'label' | 'defaultValue'
> & {
  endIcon?: ReactNode;
  helperText?: string;
  name: string;
  label?: string;
  flex?: boolean;
  isError?: boolean;
};

export interface CheckboxSwitchProps extends CheckboxProps {
  label?: string;
}

export interface DateTimeInputProps extends TextFieldProps {
  type?: 'date' | 'time' | 'datetime';
}
