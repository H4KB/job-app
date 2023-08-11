import { apiClient } from "@/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

export const logout = () => {
  return apiClient.post("/auth/logout");
};

type UseLogoutOption = {
  onSuccess?: () => void;
};

export const useLogout = ({ onSuccess }: UseLogoutOption = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear();
      onSuccess?.();
    },
  });
  return { submit, isLoading };
};
