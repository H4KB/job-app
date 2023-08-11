import { Loading } from "@/components/loading";
import { NotFound } from "@/components/not-found";
import { Seo } from "@/components/seo";
import { DashboardJobInfo, useJob } from "@/features/jobs";
import { DashBoardLayout } from "@/layouts/dashboard-layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const DashboardJobPage = () => {
  const router = useRouter();
  const jobId = router.query.jobId as string;
  const job = useJob({ jobId });

  if (job.isLoading) {
    return <Loading />;
  }

  if (!job.data) {
    return <NotFound />;
  }

  return (
    <>
      <Seo title={`${job.data.position} | ${job.data.location}`} />
      <DashboardJobInfo job={job.data} />
    </>
  );
};

DashboardJobPage.getLayout = function getLayout(page: ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default DashboardJobPage;