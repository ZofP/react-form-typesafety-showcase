import { useColors } from '@/hooks';
import { InputSelectItemProps } from '@/types';
import { Typography } from '../Typography/index.js';

interface InputSelectSingleDisplayValue {
  value: string;
  label?: string;
  placeholder?: string;
  items: InputSelectItemProps[];
  disabled?: boolean;
}

export const InputSelectSingleDisplayValue = ({
  value,
  label,
  placeholder,
  items,
  disabled,
}: InputSelectSingleDisplayValue) => {
  const { neutral } = useColors();

  return (
    <Typography
      sx={{
        color: value && !disabled ? neutral[900] : neutral[400],
        fontSize: 18,
      }}
    >
      {getDisplayedValue({ value, label, placeholder, items })}
    </Typography>
  );
};

const getDisplayedValue = ({
  value,
  label,
  placeholder,
  items,
}: InputSelectSingleDisplayValue) => {
  if (value) {
    return items.find(({ value: itemValue }) => itemValue === value)?.label;
  }
  return placeholder ?? label;
};
