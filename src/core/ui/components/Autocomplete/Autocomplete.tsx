import { useTranslation } from "react-i18next";
import {
  Autocomplete as MuiAutocomplete,
  InputLabel,
  TextField,
} from "@mui/material";

import { AutocompleteProps } from "@/types";
import { InputHelperText } from "../InputHelperText";
import { Stack } from "../Stack";
import { Typography } from "../Typography";

export const Autocomplete = ({
  name,
  placeholder,
  label,
  helperText,
  value,
  sx,
  isError,
  ...props
}: AutocompleteProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction="column" spacing={4} sx={sx}>
      {label && (
        <InputLabel
          htmlFor={name}
          shrink={false}
          sx={{
            transform: "none",
            position: "static",
          }}
        >
          <Typography
            color="neutral.700"
            weight="medium"
            fontSize={16}
            lineHeight="24px"
          >
            {label}
          </Typography>
        </InputLabel>
      )}
      <MuiAutocomplete
        id={name}
        disablePortal
        noOptionsText={t("app.autocomplete.noOptions")}
        sx={{
          width: "100%",
          height: 52,
          ".MuiFormControl-root": { height: "100%" },
          "&&": {
            "&&": {
              ".MuiInputBase-root": {
                paddingRight: "14px",
                borderRadius: "8px",
              },
            },
          },
        }}
        clearIcon={null}
        clearOnBlur
        value={value}
        renderInput={(params) => (
          <TextField
            name={name}
            value={!value ? "" : value}
            placeholder={placeholder ?? label}
            slotProps={{
              input: {
                ...params.InputProps,
              },
            }}
            {...params}
          />
        )}
        {...props}
      />
      {helperText && <InputHelperText text={helperText} />}
    </Stack>
  );
};
