export const getAppliedPadding = (basePadding: number, hasText: boolean) => {
  const divider = hasText ? 1 : 2;
  return `0 ${basePadding / divider}px`;
};
