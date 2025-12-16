import { RadioGroup as MuiRadioGroup } from '@mui/material';

import { RadioGroupProps } from '@/types';
import { FormControlLabel } from '../FormControlLabel';
import { InputLabel } from '../InputLabel';
import { Radio } from '../Radio';
import { Stack } from '../Stack';

export const RadioGroup = ({
  items,
  name,
  label,
  onChange,
  sx,
  flex = true,
  disabled,
  ...props
}: RadioGroupProps) => {
  return (
    <Stack gap={16} sx={{ flex: flex ? 1 : 'unset', ...sx }}>
      {label && <InputLabel htmlFor={name} label={label} />}
      <MuiRadioGroup
        name={name}
        onChange={onChange}
        sx={{ flexDirection: 'row', gap: 24 }}
        {...props}
      >
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.label}
              control={<Radio sx={{ cursor: 'pointer' }} disabled={disabled} />}
              {...item}
            />
          );
        })}
      </MuiRadioGroup>
    </Stack>
  );
};
