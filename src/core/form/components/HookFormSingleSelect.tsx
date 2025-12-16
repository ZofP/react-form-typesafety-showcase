import { FieldValues } from 'react-hook-form';

import { SingleInputSelect } from '@/core/ui';
import { HookFormSelectProps } from '@/types';
import { useControlledInput } from '../hooks';

export const HookFormSingleSelect = <TFormValues extends FieldValues>({
  name,
  rules,
  ...props
}: HookFormSelectProps<TFormValues>) => {
  const controlledProps = useControlledInput({ name, rules });

  return <SingleInputSelect {...controlledProps} {...props} />;
};
