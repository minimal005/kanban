import { Issue } from "@/utils/types/Issue";
import { Box, Text } from "@chakra-ui/react";

export const Card = ({ issue }: { issue: Issue }) => (
  <Box bg="gray.700" p={4} borderRadius="md" shadow="md">
    <Text fontWeight="bold">{issue.title}</Text>
    <Text fontSize="sm">
      #{issue.id} opened {issue.date}
    </Text>
    <Text fontSize="xs" color="gray.300">
      {issue.status} | {issue.author} | Comments: {issue.comments}
    </Text>
  </Box>
);
