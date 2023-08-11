import { apiClient } from "@/lib/api-client";
import { AuthUser } from "../types";
import { useQuery } from "@tanstack/react-query";

export const getAuthUser = (): Promise<AuthUser> => {
  return apiClient.get("/auth/me");
};

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: getAuthUser,
  });

  return { data, isLoading };
};
