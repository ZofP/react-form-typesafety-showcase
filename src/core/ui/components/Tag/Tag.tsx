import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { useColors } from '@/hooks';
import { Typography } from '../Typography';

interface TagProps {
  label: string;
  children: ReactNode;
}

export const Tag = ({ label, children }: TagProps) => {
  const { neutral } = useColors();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 8,
        padding: '0 8px 0 12px',
        height: 32,
        alignItems: 'center',
        borderRadius: '6px',
        backgroundColor: neutral[100],
        border: `1px solid ${neutral[200]}`,
      }}
    >
      <Typography
        color={neutral[500]}
        weight="medium"
        sx={{
          fontSize: 16,
          lineHeight: '16px',
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
};
