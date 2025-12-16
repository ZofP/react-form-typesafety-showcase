import { FormControl } from '@mui/material';

import { CheckboxSwitchProps } from '@/types';
import { Checkbox } from '../Checkbox';
import { FormControlLabel } from '../FormControlLabel';

export const CheckboxSwitch = ({
  label,
  name,
  ...props
}: CheckboxSwitchProps) => {
  return (
    <FormControl>
      <FormControlLabel
        control={<Checkbox {...props} />}
        name={name}
        label={label}
        sx={{ gap: 12 }}
      />
    </FormControl>
  );
};
