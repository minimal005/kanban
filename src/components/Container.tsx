import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

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
      borderColor="#ffffff11"
    >
      {children}
    </Box>
  );
};
