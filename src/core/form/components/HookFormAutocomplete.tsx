import { SyntheticEvent } from 'react';
import { FieldValues } from 'react-hook-form';
import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@mui/material';

import { Autocomplete } from '@/core/ui';
import { HookFormAutocompleteProps } from '@/types';
import { useControlledInput } from '../hooks';

export const HookFormAutocomplete = <TFormValues extends FieldValues>({
  name,
  rules,
  ...props
}: HookFormAutocompleteProps<TFormValues>) => {
  const { onChange, ...controlledProps } = useControlledInput({ name, rules });

  const handleChange = (
    event: SyntheticEvent,
    value: unknown,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined,
  ) => {
    onChange(
      {
        ...event,
        target: { ...event.target, value: !value ? undefined : value },
      },
      value,
      reason,
      details,
    );
  };

  return (
    <Autocomplete {...controlledProps} {...props} onChange={handleChange} />
  );
};
