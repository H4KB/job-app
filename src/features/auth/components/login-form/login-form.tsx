import { Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { InputField } from "@/components/form";

import { useLogin } from "../../api/login";
import { LoginData } from "../../types";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess });
  const { register, handleSubmit, formState } = useForm<LoginData>();
  const onSubmit = (data: LoginData) => {
    login.submit(data);
  };

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing="5" w="fill">
      <InputField
        label="Email"
        type="email"
        {...register("email", { required: "Required" })}
        error={formState.errors["email"]}
      />
      <InputField
        label="Password"
        type="password"
        {...register("password", { required: "Required" })}
        error={formState.errors["password"]}
      />
      <Button
        type="submit"
        isLoading={login.isLoading}
        isDisabled={login.isLoading}
      >
        Log in
      </Button>
    </Stack>
  );
};
