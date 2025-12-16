import { FormHelperText } from "@mui/material";

interface InputHelperTextProps {
  text: string;
}

export const InputHelperText = ({ text }: InputHelperTextProps) => {
  return (
    <FormHelperText
      sx={{
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {text}
    </FormHelperText>
  );
};
