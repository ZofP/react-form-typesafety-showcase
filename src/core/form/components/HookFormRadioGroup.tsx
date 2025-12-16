import { FieldValues, useController } from 'react-hook-form';

import { RadioGroup } from '@/core/ui';
import { HookFormRadioInputProps, RadioGroupProps } from '@/types';

export const HookFormRadioGroup = <TFormValues extends FieldValues>({
  name,
  rules,
  transformValue,
  ...props
}: HookFormRadioInputProps<TFormValues>) => {
  const {
    field: { value, onChange, onBlur },
  } = useController({ name, rules });

  const handleChange: RadioGroupProps['onChange'] = (_, value) => {
    const appliedValue = transformValue ? transformValue(value) : value;
    onChange(appliedValue);
  };

  return (
    <RadioGroup
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      {...props}
    />
  );
};
