import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

import { useColors } from '@/hooks';

declare module '@mui/material/Typography' {
  interface TypographyColorOverrides {
    neutral: true;
  }
}

export type TypographyFontWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extraBold';

interface TypographyProps extends Omit<MuiTypographyProps, 'fontWeight'> {
  weight?: TypographyFontWeight;
}

const weightMapper: Record<TypographyFontWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
};

export const Typography = ({
  weight = 'regular',
  color,
  ...props
}: TypographyProps) => {
  const { neutral } = useColors();

  return (
    <MuiTypography
      fontWeight={weightMapper[weight]}
      color={color ?? neutral[900]}
      {...props}
    />
  );
};
