import { FieldValues, useController } from 'react-hook-form';

import { CheckboxSwitch } from '@/core/ui';
import { HookFormCheckboxInputProps } from '@/types';

export const HookFormCheckbox = <TFormValues extends FieldValues>({
  name,
  rules,
  ...props
}: HookFormCheckboxInputProps<TFormValues>) => {
  const {
    field: { value, onChange, onBlur },
  } = useController({ name, rules });

  return (
    <CheckboxSwitch
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      checked={value}
      {...props}
    />
  );
};
