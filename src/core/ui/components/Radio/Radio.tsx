import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

import { useColors } from '@/hooks';

export const Radio = ({ sx, ...props }: MuiRadioProps) => {
  const { neutral } = useColors();

  return (
    <MuiRadio
      sx={{
        padding: 0,
        color: neutral[300],
        '.Mui-checked': {
          color: 'primary.main',
        },
        '& .MuiSvgIcon-root': { fontSize: '28.81px' },
        ...sx,
      }}
      {...props}
    />
  );
};
