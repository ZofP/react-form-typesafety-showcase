import { FieldError } from 'react-hook-form';
import { TFunction } from 'i18next';

const getTranslatedErrorMessage = (
  t: TFunction<'errors'>,
  errorMessage?: string,
): string | undefined => {
  if (!errorMessage) return;

  return t(errorMessage);
};

export const getFormInputErrorProperties = (
  t: TFunction<'errors'>,
  error?: FieldError,
) => {
  return {
    isError: !!error,
    helperText: getTranslatedErrorMessage(t, error?.message),
  };
};
