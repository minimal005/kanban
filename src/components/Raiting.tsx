// import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BreadCrumbs } from "./BreadCrumbs";
// import { formatStars } from "@/utils/helpers/formatStars";

export const Raiting = () => {
  // const { path, stars, fetchRepoDetails } = useGithubStore();
  // useEffect(() => {
  //   if (path) {
  //     fetchRepoDetails(path);
  //   }
  // }, [path, fetchRepoDetails]);

  // const formattedStars = formatStars(stars);

  return (
    <Flex as="section" mb={10} align="center" gap="15px">
      <BreadCrumbs />
      <Flex align="center" gap="5px">
        <Box>
          <Box as="span" color="var(--yellow-color)">
            ★
          </Box>{" "}
          {/* {formattedStars} stars */}
        </Box>
      </Flex>
    </Flex>
  );
};
