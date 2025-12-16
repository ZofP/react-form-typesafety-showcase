import { MouseEventHandler } from "react";
import { Box } from "@mui/material";

import { InputSelectItemProps, InputSelectProps } from "@/types";
import { Tag } from "../Tag";
import { InputSelectSingleDisplayValue } from "./InputSelectSingleDisplayValue";
import { Button } from "../Button";

interface InputSelectMultipleDisplayValuesProps<T = string> {
  currValue: T;
  items: InputSelectProps["items"];
  label?: string;
  handleRemove: (value: string) => void;
  disabled?: boolean;
}

export const InputSelectMultipleDisplayValues = ({
  currValue,
  items,
  label,
  handleRemove,
  disabled,
}: InputSelectMultipleDisplayValuesProps<string[]>) => {
  if (!currValue.length) {
    return (
      <InputSelectSingleDisplayValue
        value=""
        items={items}
        label={label}
        disabled={disabled}
      />
    );
  }

  const protectedHandleRemove = (value: string) => {
    if (disabled) {
      return;
    }
    handleRemove(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 8,
        overflowX: "scroll",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      {currValue.map((value) => {
        const item = items.find((item) => item.value === value);
        if (!item) {
          return null;
        }
        return (
          <MultipleInputSelectItem
            key={item.label}
            item={item}
            handleRemove={protectedHandleRemove}
          />
        );
      })}
    </Box>
  );
};

interface MultipleInputSelectItemProps {
  item: InputSelectItemProps;
  handleRemove: (value: string) => void;
}

const MultipleInputSelectItem = ({
  item,
  handleRemove,
}: MultipleInputSelectItemProps) => {
  const { label, value } = item;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    handleRemove(value);
  };

  return (
    <Tag label={label}>
      <Button onClick={handleClick} />
    </Tag>
  );
};
