import { Link } from "@/components/link";
import { NotFound } from "@/components/not-found";
import { Center } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <Center>
        <Link href="/">Home</Link>
      </Center>
    </>
  );
};

export default NotFoundPage;
