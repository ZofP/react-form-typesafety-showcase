import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Stack, useLoginMutation } from "@/core";
import { useTypedFormContext } from "@/core/form";
import { useSnackbarContext } from "@/core/snackbar";
import { LoginSchema } from "@/types";

/**
 * NOTE:
 * This file is intentionally not runnable.
 * Its purpose is to demonstrate compile-time guarantees enforced by the form helpers.
 */

const DEFAULT_VALUES: LoginSchema = {
  username: "",
  password: "",
};

export const LoginForm = () => {
  const { t } = useTranslation("auth");
  const { mount } = useSnackbarContext();
  const [login] = useLoginMutation();
  const { useForm, Form } = useTypedFormContext<LoginSchema>();
  const methods = useForm({ defaultValues: DEFAULT_VALUES });

  const handleSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      await login(data).unwrap();
    } catch {
      mount();
    }
  };

  return (
    <>
      <Form {...methods} submitHandler={handleSubmit}>
        <Stack gap={24}>
          <Form.TextInput
            name="username"
            label={t("login.form.inputs.username")}
            autoComplete="none"
          />
          <Form.TextInput
            name="password"
            label={t("login.form.inputs.password")}
            type="password"
            autoComplete="current-password"
          />
          <Form.SubmitButton label={t("login.form.submit")} />
        </Stack>
      </Form>
    </>
  );
};
