import { FieldValues } from 'react-hook-form';

import { DateTimeInput } from '@/core/ui';
import { DateTimeInputProps, HookFormTextInputProps } from '@/types';
import { useControlledInput } from '../hooks';

export const HookFormDateTimeInput = <TFormValues extends FieldValues>({
  name,
  rules,
  ...inputProps
}: HookFormTextInputProps<TFormValues> & DateTimeInputProps) => {
  const controlledProps = useControlledInput({ name, rules });

  return <DateTimeInput {...controlledProps} {...inputProps} />;
};
