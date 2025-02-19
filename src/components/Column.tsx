import { Issue } from "@/utils/types/Issue";
import { Text, VStack } from "@chakra-ui/react";

import { Card } from "./Card";

export const Column = ({
  title,
  issues,
}: {
  title: string;
  issues: Issue[];
}) => (
  <VStack
    w="100%"
    p={4}
    bg="gray.800"
    borderRadius="md"
    borderStyle="solid"
    borderWidth="1px"
    borderColor="#ffffff11"
    minH="300px"
    align="stretch"
  >
    <Text fontWeight="bold" textAlign="center" color="blue.500" mb={3}>
      {title}
    </Text>
    {issues.length > 0 ? (
      issues.map((issue) => <Card key={issue.id} issue={issue} />)
    ) : (
      <Text textAlign="center">No issues</Text>
    )}
  </VStack>
);
