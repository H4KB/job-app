import { Box } from "@chakra-ui/react";
import exp from "constants";

export type ContentProps = {
  children: string;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <Box lineHeight="7" letterSpacing="wide" my="4">
      {children}
    </Box>
  );
};
