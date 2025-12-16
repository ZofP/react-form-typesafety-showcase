import { FieldValues } from 'react-hook-form';

import { TextInput } from '@/core/ui';
import { HookFormTextInputProps } from '@/types';
import { useControlledInput } from '../hooks';
import { getAllInputSlotProps, getInputResultValue } from '../utils';

export const HookFormTextInput = <TFormValues extends FieldValues>({
  name,
  rules,
  type,
  slotProps,
  isPercentage,
  ...inputProps
}: HookFormTextInputProps<TFormValues>) => {
  const { onChange, ...controlledProps } = useControlledInput({ name, rules });
  const allSlotProps = getAllInputSlotProps({
    inputType: type,
    isPercentage,
    slotProps,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { value } = target;

    onChange({
      ...event,
      target: {
        ...target,
        value: getInputResultValue({
          value,
          inputType: type,
          slotProps: allSlotProps,
        }),
      },
    });
  };

  return (
    <TextInput
      {...controlledProps}
      {...inputProps}
      onChange={handleChange}
      type={type}
      slotProps={allSlotProps}
    />
  );
};
