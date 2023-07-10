import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

type GetJobsOptions = {
  params: {
    organizationId: string | undefined;
  };
};

export const getJobs = ({ params }: GetJobsOptions) => {
  return apiClient.get("/jobs", { params });
};

export const useJobs = ({ params }: GetJobsOptions) => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["jobs", params],
    queryFn: () => getJobs({ params }),
    enabled: !!params.organizationId,
  });

  return { data, isLoading: isFetching && !isFetched };
};
