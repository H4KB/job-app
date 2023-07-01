import { Link } from "@/components/link";
import { useUser } from "@/testing/test-data";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type DashBoardLayoutProps = {
  children: ReactNode;
};

export const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  const user = useUser();

  return (
    <Box as="section" h="100vh" overflow="auto">
      <Navbar />
      <Container as="main" maxW="container.lg" py="12">
        {children}
      </Container>
      <Box py="8" textAlign="center">
        <Link href={`/organizations/${user.data?.organizationId}`}>
          View Public Organization Page
        </Link>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <Link variant="solid" href="/">
              Jobs App
            </Link>
            <HStack spacing="1">
              <Link
                icon={<InfoOutlineIcon />}
                variant="solid"
                href="/dashboard/jobs"
              >
                Jobs
              </Link>
            </HStack>
          </HStack>
          <HStack>
            <Button
              variant="outline"
              onClick={() => console.log("Logging Out...")}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
