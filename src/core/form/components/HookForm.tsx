import { FieldValues, useFormContext } from 'react-hook-form';

import { HookFormProps } from '@/types';

export const HookForm = <TFieldValues extends FieldValues = FieldValues>({
  children,
  submitHandler,
}: HookFormProps<TFieldValues>) => {
  const { handleSubmit } = useFormContext<TFieldValues>();

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      onSubmit={handleSubmit(submitHandler)}
    >
      {children}
    </form>
  );
};
