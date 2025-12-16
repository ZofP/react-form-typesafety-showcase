import {
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { getFormInputErrorProperties } from '../utils';

interface UseControlledInputArgs<TFormValues extends FieldValues> {
  name: string & Path<TFormValues>;
  rules?: Omit<
    RegisterOptions<TFormValues, Path<TFormValues>>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
}

export const useControlledInput = <TFormValues extends FieldValues>({
  name,
  rules,
}: UseControlledInputArgs<TFormValues>) => {
  const { t } = useTranslation('errors');
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    rules,
  });

  return {
    name,
    value,
    onChange,
    onBlur,
    ...getFormInputErrorProperties(t, error),
  };
};
