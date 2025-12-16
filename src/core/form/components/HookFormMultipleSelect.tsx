import { FieldValues } from 'react-hook-form';

import { MultipleInputSelect } from '@/core/ui/components/InputSelect/MultipleInputSelect';
import { HookFormSelectProps, MultipleSelectAdditionalProps } from '@/types';
import { useControlledInput } from '../hooks';

type HookFormMultipleSelectProps<TFormValues extends FieldValues> =
  HookFormSelectProps<TFormValues> & MultipleSelectAdditionalProps;

export const HookFormMultipleSelect = <TFormValues extends FieldValues>({
  name,
  rules,
  ...props
}: HookFormMultipleSelectProps<TFormValues>) => {
  const controlledProps = useControlledInput({ name, rules });

  return (
    // @ts-expect-error unable to derive the correct type
    <MultipleInputSelect {...controlledProps} {...props} />
  );
};
