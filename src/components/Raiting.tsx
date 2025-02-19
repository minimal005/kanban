import { Box, Flex } from "@chakra-ui/react";
import { BreadCrumbs } from "./BreadCrumbs";

export const Raiting = () => {
  return (
    <Flex as="section" mb={4} align="center" gap="15px">
      <BreadCrumbs />
      <Flex align="center" gap="5px">
        <Box>
          <Box as="span" color="#b49135">
            ★
          </Box>{" "}
          933 stars
        </Box>
      </Flex>
    </Flex>
  );
};
