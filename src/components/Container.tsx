import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};
export const Container: React.FC<Props> = ({ children }) => {
  return (
    <Box
      p={6}
      bg="gray.900"
      minH="100vh"
      color="gray.400"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="var(--bg-column)"
    >
      {children}
    </Box>
  );
};
