import { InputSelectProps, MultipleSelectAdditionalProps } from '@/types';
import { InputSelectContent } from './InputSelectContent';
import { InputSelectMultipleDisplayValues } from './InputSelectMultipleDisplayValues';

type MultipleInputSelectProps = InputSelectProps<string[]> &
  MultipleSelectAdditionalProps;

export const MultipleInputSelect = ({
  value,
  label,
  items,
  placeholder,
  flex,
  height = 52,
  handleRemove,
  disabled,
  ...props
}: MultipleInputSelectProps) => {
  return (
    <InputSelectContent<string[]>
      {...{
        value,
        items,
        label,
        placeholder,
        height,
        flex,
        multiple: true,
        disabled,
        ...props,
      }}
      renderValue={(value) => (
        <InputSelectMultipleDisplayValues
          currValue={value}
          items={items}
          label={label}
          handleRemove={handleRemove}
          disabled={disabled}
        />
      )}
    />
  );
};
