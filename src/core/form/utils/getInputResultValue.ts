import { GetInputResultValueArgs } from '../types';
import { getInputResultNumericValue } from './getInputResultNumericValue';

export const getInputResultValue = ({
  value,
  inputType,
  slotProps,
}: GetInputResultValueArgs) => {
  if (!value) {
    return null;
  }

  if (inputType === 'number') {
    return getInputResultNumericValue({ value, slotProps });
  }

  return value;
};
