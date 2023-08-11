import { apiClient } from "@/lib/api-client";
import { AuthUser, LoginData } from "../types";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

export const login = (data: LoginData): Promise<{ user: AuthUser }> => {
  return apiClient.post("/auth/login", data);
};

type UseLoginOption = {
  onSuccess?: (user: AuthUser) => void;
};

export const useLogin = ({ onSuccess }: UseLoginOption = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["auth-user"], user);
      onSuccess?.(user);
    },
  });
  return { submit, isLoading };
};
