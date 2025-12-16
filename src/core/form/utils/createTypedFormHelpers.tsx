import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { TypedFormProps, TypedUseFormArgs } from '@/types';
import {
  HookForm,
  HookFormAutocomplete,
  HookFormCheckbox,
  HookFormDateTimeInput,
  HookFormMultipleSelect,
  HookFormRadioGroup,
  HookFormRadioSwitch,
  HookFormSingleSelect,
  HookFormSubmitButton,
  HookFormTextInput,
} from '../components';

/**
 * Defines a typed boundary between a form schema and its UI components.
 *
 * This factory exists to eliminate stringly-typed form wiring by binding
 * all Form field components to a single `TFormValues` schema. Once created,
 * every child input enforces at compile time that its `name` corresponds
 * to a key of `TFormValues`, preventing mismatches that would otherwise
 * surface only at runtime.
 *
 * The returned helpers intentionally couple the Form component and `useForm`
 * hook to the same generic type to keep form configuration and usage
 * consistent across the component tree.
 */
export const createTypedFormHelpers = <
  TFormValues extends FieldValues = FieldValues,
>() => {
  const Form = ({
    children,
    submitHandler,
    ...methods
  }: TypedFormProps<TFormValues>) => (
    <FormProvider {...methods}>
      <HookForm submitHandler={submitHandler}>{children}</HookForm>
    </FormProvider>
  );

  Form.TextInput = HookFormTextInput<TFormValues>;
  Form.SubmitButton = HookFormSubmitButton;
  Form.SingleSelect = HookFormSingleSelect<TFormValues>;
  Form.MultipleSelect = HookFormMultipleSelect<TFormValues>;
  Form.RadioGroup = HookFormRadioGroup<TFormValues>;
  Form.RadioSwitch = HookFormRadioSwitch<TFormValues>;
  Form.Checkbox = HookFormCheckbox<TFormValues>;
  Form.Autocomplete = HookFormAutocomplete<TFormValues>;
  Form.DateInput = HookFormDateTimeInput<TFormValues>;

  const useTypedForm = (args: TypedUseFormArgs<TFormValues>) =>
    useForm<TFormValues>(args);

  return { useForm: useTypedForm, Form };
};
