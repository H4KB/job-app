import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

type GetJobOptions = {
  jobId: string;
};

export const getJob = ({ jobId }: GetJobOptions) => {
  return apiClient.get(`/jobs/${jobId}`);
};

export const useJob = ({ jobId }: GetJobOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => getJob({ jobId }),
  });
  return { data, isLoading };
};
