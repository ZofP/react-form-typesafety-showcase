import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';

import { Typography } from '../Typography';

interface InputLabelProps extends MuiInputLabelProps {
  label: string;
}

export const InputLabel = ({ label, sx, ...props }: InputLabelProps) => {
  return (
    <MuiInputLabel
      shrink={false}
      sx={{
        transform: 'none',
        position: 'static',
        ...sx,
      }}
      {...props}
    >
      <Typography
        color="neutral.700"
        weight="medium"
        fontSize={16}
        lineHeight="24px"
      >
        {label}
      </Typography>
    </MuiInputLabel>
  );
};
