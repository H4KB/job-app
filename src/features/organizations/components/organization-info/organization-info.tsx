import { Heading, Stack } from "@chakra-ui/react";
import { Organization } from "../../types";
import { InfoCard } from "@/components/info-card";
import { Content } from "@/components/content";

type OrganizationInfoProps = {
  organization: Organization;
};
export const OrganizationInfo = ({ organization }: OrganizationInfoProps) => {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Heading>{organization?.name}</Heading>
        <Stack
          w={{ base: "full", md: "auto" }}
          direction={{ base: "column", md: "row" }}
        >
          <InfoCard label={organization.email} value={organization.email} />
          <InfoCard label={organization.phone} value={organization.phone} />
        </Stack>
      </Stack>

      <Content>{organization.info}</Content>
    </>
  );
};
