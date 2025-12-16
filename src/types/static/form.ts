import { ReactNode } from 'react';
import {
  FieldPath,
  FieldValues,
  SubmitHandler,
  UseControllerProps,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

import {
  AutocompleteProps,
  CheckboxSwitchProps,
  InputSelectProps,
  RadioGroupProps,
  TextFieldProps,
} from './ui';

export enum FormInputErrorMessageTypeEnum {
  InvalidPasswordLength = 'invalidPasswordLength',
  InvalidEmailFormat = 'invalidEmailFormat',
  ThisFieldIsRequired = 'thisFieldIsRequired',
  PasswordsDoNotMatch = 'passwordsDoNotMatch',
  None = '',
  InvalidFormat = 'invalidFormat',
  InvalidAmount = 'invalidAmount',
  InvalidValue = 'invalidValue',
  AtLeastOneOptionRequired = 'atLeastOneOptionRequired',
}

export interface HookFormTextInputProps<
  TFormValues extends FieldValues = FieldValues,
> extends TextFieldProps,
    UseControllerProps {
  name: FieldPath<TFormValues>;
  isPercentage?: boolean;
}
export type HookFormSelectProps<TFormValues extends FieldValues = FieldValues> =
  InputSelectProps &
    Omit<UseControllerProps<TFormValues>, 'defaultValue'> & {
      name: FieldPath<TFormValues>;
    };
export type HookFormRadioInputProps<
  TFormValues extends FieldValues = FieldValues,
> = RadioGroupProps &
  Omit<UseControllerProps<TFormValues>, 'defaultValue' | 'onChange'> & {
    transformValue?: (value: string) => any;
    name: FieldPath<TFormValues>;
  };
export type HookFormCheckboxInputProps<
  TFormValues extends FieldValues = FieldValues,
> = CheckboxSwitchProps &
  Omit<UseControllerProps<TFormValues>, 'defaultValue' | 'onChange'> & {
    name: FieldPath<TFormValues>;
  };
export type HookFormAutocompleteProps<
  TFormValues extends FieldValues = FieldValues,
> = AutocompleteProps &
  Omit<UseControllerProps<TFormValues>, 'defaultValue' | 'onChange'> & {
    name: FieldPath<TFormValues>;
  };

export interface HookFormProps<TFieldValues extends FieldValues = FieldValues> {
  children?: ReactNode;
  submitHandler: SubmitHandler<TFieldValues>;
}

export type TypedFormProps<TFieldValues extends FieldValues> =
  HookFormProps<TFieldValues> & UseFormReturn<TFieldValues>;

export type TypedUseFormArgs<TFormValues extends FieldValues = FieldValues> =
  UseFormProps<TFormValues> & { defaultValues: TFormValues };

export type TypedFormContext<TFormValues extends FieldValues = FieldValues> =
  HookFormProps<TFormValues> & UseFormReturn<TFormValues>;
