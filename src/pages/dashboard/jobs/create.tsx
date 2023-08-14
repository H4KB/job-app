import { Seo } from "@/components/seo";
import { CreateJobForm } from "@/features/jobs/components/create-job-form/create-job-form";
import { DashBoardLayout } from "@/layouts/dashboard-layout";
import { useNotifications } from "@/stores/notifications";
import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";

const DashBoardCreateJobPage = () => {
  const router = useRouter();
  const { showNotification } = useNotifications();
  const onSuccess = () => {
    showNotification({
      type: "success",
      title: "Success",
      message: "Job Created!",
      duration: 5000,
    });
    router.push("/dashboard/jobs");
  };
  return (
    <>
      <Seo title="Create Job" />
      <Heading mb="8">Create Job</Heading>
      <CreateJobForm onSuccess={onSuccess} />
    </>
  );
};

DashBoardCreateJobPage.getLayout = function (page: ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default DashBoardCreateJobPage;
