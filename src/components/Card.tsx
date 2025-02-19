import { Issue } from "@/utils/types/Issue";
import { Box, Text } from "@chakra-ui/react";

export const Card = ({ issue }: { issue: Issue }) => (
  <Box
    as="article"
    bg="#3f3f4694"
    p={4}
    borderRadius="md"
    shadow="xs"
    cursor="pointer"
    borderColor="transparent"
    borderStyle="solid"
    borderWidth="1px"
    transition="border-color 0.3s linear"
    _hover={{
      borderColor: "blue.600",
    }}
  >
    <Text fontWeight="bold" color="#b49135">
      {issue.title}
    </Text>
    <Text fontSize="sm">
      #{issue.id} opened {issue.date}
    </Text>
    <Text fontSize="xs" color="gray.300">
      {issue.status} | {issue.author} | Comments: {issue.comments}
    </Text>
  </Box>
);
