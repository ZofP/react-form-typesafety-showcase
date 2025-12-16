import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps,
} from '@mui/material';

import { useColors } from '@/hooks';

export const FormControlLabel = ({ sx, ...props }: FormControlLabelProps) => {
  const { neutral } = useColors();

  return (
    <MuiFormControlLabel
      sx={{
        gap: 4,
        margin: 0,
        '.MuiTypography-root': {
          fontSize: 18,
          color: neutral[900],
          lineHeight: '18px',
        },
        ...sx,
      }}
      {...props}
    />
  );
};
