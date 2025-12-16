import { GetInputResultValueArgs } from '../types';

export const getInputResultNumericValue = ({
  slotProps,
  value,
}: Partial<Omit<GetInputResultValueArgs, 'inputType'>>) => {
  const numericalValue = Number(value);
  if (!value || isNaN(numericalValue)) {
    return '0';
  }

  const numericalMax = Number(slotProps?.input?.max);
  let result = numericalValue;
  if (numericalMax && numericalValue > numericalMax) {
    result = numericalMax;
  }
  return String(result);
};
