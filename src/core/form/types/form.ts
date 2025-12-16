import { FieldValues } from 'react-hook-form';

import { createTypedFormHelpers } from '../utils';

export type TypedFormContextArgs<
  TFormValues extends FieldValues = FieldValues,
> = ReturnType<typeof createTypedFormHelpers<TFormValues>>;
export type FormType<TFormValues extends FieldValues = FieldValues> =
  TypedFormContextArgs<TFormValues>['Form'];
