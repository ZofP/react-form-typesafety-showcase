import { Button as MuiButton } from "@mui/material";

import { ButtonProps } from "@/types";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { sizesMapper } from "./utils";

export const Button = ({
  buttonType = "primary",
  size = "large",
  label,
  startIcon,
  endIcon,
  type = "button",
  children,
  sx,
  ...props
}: ButtonProps) => {
  const fontSize = size === "small" ? "16px" : "18px";

  return (
    <MuiButton
      disableRipple
      disableFocusRipple
      type={type}
      variant="contained"
      classes={[{ root: true }]}
      sx={{
        ...sizesMapper(!!label)[size],
        borderRadius: "8px",
        textTransform: "none",
        boxShadow: "none",
        cursor: "pointer",
        "&:focus": { outline: "none" },
        "&.Mui-focusVisible": {
          boxShadow: "none",
        },
        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      }}
      {...props}
    >
      <Stack direction="row" spacing={8} alignItems="center">
        {startIcon}
        {label && (
          <Typography
            sx={{
              fontSize,
              lineHeight: fontSize,
            }}
            weight="medium"
          >
            {label}
          </Typography>
        )}
        {children}
        {endIcon}
      </Stack>
    </MuiButton>
  );
};
