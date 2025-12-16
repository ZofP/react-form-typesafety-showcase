import { InputSelectProps } from '@/types';
import { InputSelectContent } from './InputSelectContent';
import { InputSelectSingleDisplayValue } from './InputSelectSingleDisplayValue';

export const SingleInputSelect = ({
  value,
  label,
  items,
  placeholder,
  flex,
  height = 52,
  disabled,
  ...props
}: InputSelectProps<string>) => {
  return (
    <InputSelectContent<string>
      {...{
        value,
        items,
        label,
        placeholder,
        height,
        flex,
        disabled,
        ...props,
      }}
      renderValue={(value) => (
        <InputSelectSingleDisplayValue
          {...{ value, label, placeholder, items, disabled }}
        />
      )}
    />
  );
};
