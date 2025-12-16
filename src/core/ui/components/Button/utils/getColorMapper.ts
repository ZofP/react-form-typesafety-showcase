import { Palette, SxProps, Theme } from '@mui/material';

import { ButtonType } from '@/types';

type ColorMapperReturnType = SxProps<Theme> & {
  backgroundColor: string;
  color: string;
};

export const getColorMapper = ({
  primary,
  neutral,
  destructive,
  common,
}: Palette): Record<ButtonType, ColorMapperReturnType> => {
  return {
    primary: {
      backgroundColor: primary.main,
      color: common.white,
      '&:hover': {
        backgroundColor: primary[600],
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: primary[700],
      },
    },
    secondary: {
      backgroundColor: primary[50],
      color: destructive[700],
      '&:hover': {
        backgroundColor: primary[100],
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: primary[200],
        color: destructive[900],
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: primary.main,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: primary[700],
      },
      '&:active': {
        backgroundColor: 'transparent',
        color: primary[900],
      },
    },
    neutral: {
      backgroundColor: common.white,
      color: neutral[700],
      border: `1px solid ${neutral[300]}`,
      '&:hover': { boxShadow: 'none', backgroundColor: neutral[50] },
      '&:active': {
        backgroundColor: neutral[100],
      },
    },
  };
};
