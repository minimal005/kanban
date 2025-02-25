import { useAppSelector } from "@/app/hooks";
import { BreadCrumbs } from "./BreadCrumbs";
import { formatStars } from "@/utils/helpers/formatStars";
import { Box, Flex } from "@chakra-ui/react";

export const Raiting = () => {
  const stars = useAppSelector((state) => state.issues.stars);
  const formattedStars = formatStars(stars);

  return (
    <Flex as="section" mb={10} align="center" gap="15px">
      <BreadCrumbs />
      <Flex align="center" gap="5px">
        <Box>
          <Box as="span" color="var(--yellow-color)">
            ★
          </Box>{" "}
          {formattedStars} stars
        </Box>
      </Flex>
    </Flex>
  );
};
