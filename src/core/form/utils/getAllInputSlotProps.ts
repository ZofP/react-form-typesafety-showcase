import { OutlinedInputProps } from '@mui/material';

interface GetAllSlotPropsArgs {
  inputType?: string;
  isPercentage?: boolean;
  slotProps?: OutlinedInputProps['slotProps'];
}

const PERCENTAGE_RANGE = { min: 0, max: 100 };

export const getAllInputSlotProps = ({
  inputType,
  isPercentage,
  slotProps,
}: GetAllSlotPropsArgs) => {
  if (inputType !== 'number') {
    return slotProps;
  }

  const defaulStlotProps: OutlinedInputProps['slotProps'] = {
    ...slotProps,
    input: { inputMode: 'numeric', pattern: '[0-9]*' },
  };

  if (!isPercentage) {
    return defaulStlotProps;
  }

  return {
    ...defaulStlotProps,
    input: {
      ...defaulStlotProps.input,
      ...PERCENTAGE_RANGE,
    },
  };
};
