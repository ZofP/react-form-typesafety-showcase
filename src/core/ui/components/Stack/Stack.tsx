import { Stack as MuiStack, StackProps } from "@mui/material";

export const Stack = ({ useFlexGap = true, ...props }: StackProps) => {
  return <MuiStack useFlexGap={useFlexGap} {...props} />;
};
