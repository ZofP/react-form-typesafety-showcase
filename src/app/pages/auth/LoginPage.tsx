import { HookFormProvider } from "@/core";
import { LoginForm } from "@/modules/auth";

export const LoginPage = () => {
  return (
    <HookFormProvider>
      <LoginForm />
    </HookFormProvider>
  );
};
