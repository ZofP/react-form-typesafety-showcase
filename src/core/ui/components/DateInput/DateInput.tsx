import { FormControl, OutlinedInput, Palette } from "@mui/material";

import { useColors } from "@/hooks";
import { DateTimeInputProps } from "@/types";
import { InputHelperText } from "../InputHelperText";
import { InputLabel } from "../InputLabel";
import { Stack } from "../Stack";

export const DateTimeInput = ({
  placeholder,
  label,
  helperText,
  name,
  type = "date",
  sx,
  flex = true,
  isError,
  ...props
}: DateTimeInputProps) => {
  const palette = useColors();
  const inputType =
    type === "date" ? "date" : type === "time" ? "time" : "datetime-local";

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ flex: flex ? 1 : "unset", ...sx }}
    >
      {label && <InputLabel label={label} htmlFor={name} />}
      <FormControl>
        <OutlinedInput
          sx={{
            "& input": {
              cursor: "pointer",
            },
            ...sx,
          }}
          id={name}
          placeholder={placeholder ?? label}
          name={name}
          type={inputType}
          {...props}
        />
      </FormControl>
      {helperText && <InputHelperText text={helperText} />}
    </Stack>
  );
};
