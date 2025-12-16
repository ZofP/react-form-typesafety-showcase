import { Button } from "@/core/ui";
import { ButtonProps } from "@/types";

export const HookFormSubmitButton = (props: ButtonProps) => {
  return <Button type="submit" {...props} />;
};
