import { useState } from "react";
import { FormControl, OutlinedInput } from "@mui/material";

import { useColors } from "@/hooks";
import { TextFieldProps } from "@/types";
import { InputHelperText } from "../InputHelperText";
import { InputLabel } from "../InputLabel";
import { Stack } from "../Stack";

export const TextInput = ({
  placeholder,
  label,
  helperText,
  endIcon,
  name,
  type = "text",
  sx,
  flex = true,
  value,
  isError,
  ...props
}: TextFieldProps) => {
  const isPassword = type === "password";
  const [isMasked, setIsMasked] = useState(isPassword);
  const palette = useColors();

  const toggleMasked = () => {
    setIsMasked((prev) => !prev);
  };

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ flex: flex ? 1 : "unset", ...sx }}
    >
      {label && <InputLabel label={label} htmlFor={name} />}
      <FormControl>
        <OutlinedInput
          sx={sx}
          id={name}
          placeholder={placeholder ?? label}
          name={name}
          type={!isMasked && isPassword ? "text" : type}
          value={value ?? ""}
          {...props}
        />
      </FormControl>
      {helperText && <InputHelperText text={helperText} />}
    </Stack>
  );
};
