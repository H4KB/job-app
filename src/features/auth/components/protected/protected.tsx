import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useUser } from "../../api/get-auth-user";
import { Flex } from "@chakra-ui/react";
import { Loading } from "@/components/loading";

export type ProtectedProps = {
  children: ReactNode;
};

export const Protected = ({ children }: ProtectedProps) => {
  const { replace, asPath } = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user.isLoading && !user.data) {
      replace(`/auth/login?redirect=${asPath}`, undefined, {
        shallow: true,
      });
    }
  }, [user, asPath, replace]);

  if (user.isLoading) {
    return (
      <Flex direction="column" justify="center" h="full">
        <Loading />
      </Flex>
    );
  }

  if (!user.isLoading && !user.data) return null;

  return <>{children}</>;
};