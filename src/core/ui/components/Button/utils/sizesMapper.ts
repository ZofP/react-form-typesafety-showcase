import { SxProps, Theme } from '@mui/material';

import { ButtonSize } from '@/types';
import { getAppliedPadding } from './getAppliedPadding';

export const sizesMapper = (
  hasText: boolean,
): Record<ButtonSize, SxProps<Theme>> => {
  return {
    large: { padding: getAppliedPadding(24, hasText), height: 52 },
    small: { padding: getAppliedPadding(16, hasText), height: 40 },
    medium: { padding: getAppliedPadding(10, hasText), height: 48 },
  };
};
