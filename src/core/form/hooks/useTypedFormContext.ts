import { Context, useContext } from 'react';
import { FieldValues } from 'react-hook-form';

import { TypedFormContext } from '../context';
import { TypedFormContextArgs } from '../types';

/**
 * Enables type-safe access to Form child components anywhere in the context tree.
 *
 * This abstraction exists to enforce the form schema at compile time:
 * the `name` prop of each field must correspond to a key in `TFormValues`,
 * preventing invalid form wiring that would otherwise fail only at runtime.
 */
export const useTypedFormContext = <
  TFormValues extends FieldValues = FieldValues,
>() => {
  type FormType = TypedFormContextArgs<TFormValues> | null;
  // Typecast is necessary due to the fact that TypedFormContext cannot take a generic parameter and needs to be stable between calls.
  const context = useContext<FormType>(TypedFormContext as Context<FormType>);

  if (!context) {
    throw new Error(
      'useTypedFormContext needs to be wrapped in TypedFormContext Provider',
    );
  }

  return context;
};
