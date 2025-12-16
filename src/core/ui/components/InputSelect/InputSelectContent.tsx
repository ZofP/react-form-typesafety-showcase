import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import { useColors } from "@/hooks";
import { InputSelectProps } from "@/types";
import { InputHelperText } from "../InputHelperText";
import { InputLabel } from "../InputLabel";
import { Stack } from "../Stack";

export const InputSelectContent = <T,>({
  value,
  items,
  onChange,
  name,
  label,
  flex = true,
  multiple,
  sx,
  renderValue,
  disabled,
  helperText,
}: InputSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const palette = useColors();
  const handleOpen: InputSelectProps["onOpen"] = () => {
    if (isOpen || disabled) {
      return;
    }
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <FormControl sx={{ flex: flex ? 1 : "unset", ...sx }}>
      <Stack direction="column" spacing={4} sx={{ flex: 1, width: "100%" }}>
        {label && <InputLabel htmlFor={name} label={label} />}
        <Select
          label={label}
          displayEmpty
          value={value ?? ""}
          onChange={onChange}
          name={name}
          onClick={handleOpen}
          open={isOpen}
          onClose={handleClose}
          renderValue={renderValue}
          inputProps={{ disabled }}
          multiple={multiple}
        >
          {items.map(({ value, label }) => (
            <MenuItem key={label + value} value={value} disableRipple>
              {label}
            </MenuItem>
          ))}
        </Select>
        {helperText && <InputHelperText text={helperText} />}
      </Stack>
    </FormControl>
  );
};
