import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

import { useColors } from '@/hooks';

export const Checkbox = (props: CheckboxProps) => {
  const { neutral } = useColors();

  return (
    <MuiCheckbox
      sx={{
        padding: 0,
        color: neutral[300],
        '.Mui-checked': {
          color: 'primary.main',
        },
        '& .MuiSvgIcon-root': { fontSize: 32 },
        height: 24,
        width: 24,
      }}
      {...props}
    />
  );
};
