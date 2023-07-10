import { apiClient } from "@/lib/api-client";
import { CreateJobData, Job } from "../types";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

type CreateJobOptions = {
  data: CreateJobData;
};

export const createJob = ({ data }: CreateJobOptions): Promise<Job> => {
  return apiClient.post("/job", data);
};

type useCreateJobOptions = {
  onSuccess?: (job: Job) => void;
};

export const useCreateJob = ({ onSuccess }: useCreateJobOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(["jobs"]);
      onSuccess?.(job);
    },
  });
  return { submit, isLoading };
};
