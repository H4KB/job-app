import { apiClient } from "@/lib/api-client";
import { Organization } from "../types";
import { useQuery } from "@tanstack/react-query";

type GetOrganizationOptions = {
  organizationId: string;
};

export const getOrganization = ({
  organizationId,
}: GetOrganizationOptions): Promise<Organization> => {
  return apiClient.get(`organization/${organizationId}`);
};

export const useOrganization = ({ organizationId }: GetOrganizationOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: ["organization", organizationId],
    queryFn: () => getOrganization({ organizationId }),
  });
  return { data, isLoading };
};
