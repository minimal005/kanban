import React from "react";
import { useDroppable } from "@dnd-kit/react";
import { Flex, Text, VStack } from "@chakra-ui/react";

import { CollisionPriority } from "@dnd-kit/abstract";
import { Card } from "./Card";
import { Issue } from "@/utils/types/Issue";

type Props = {
  id: string;
  issues: Issue[];
};

export const Column: React.FC<Props> = ({ id, issues }) => {
  const { isDropTarget, ref } = useDroppable({
    id,
    type: "column",
    accept: "item",
    collisionPriority: CollisionPriority.Low,
  });

  const style = isDropTarget ? { background: "var(--bg)" } : undefined;
  const statusStyle = id[0].toUpperCase() + id.slice(1);

  return (
    <VStack
      ref={ref}
      style={style}
      flex="1"
      p={4}
      w="full"
      mx="auto"
      bg="gray.800"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="var(--bg-column)"
      maxH="100%"
      align="stretch"
      transition="max-height 0.3s ease"
    >
      <Flex
        fontWeight="bold"
        align="center"
        justify="center"
        color="blue.500"
        mb={3}
      >
        {statusStyle === "InProgress" ? "In Progress" : statusStyle}
      </Flex>

      {issues.length > 0 ? (
        issues.map((issue, index) => (
          <Card
            key={issue.id}
            id={issue.id}
            status={id}
            index={index}
            issue={issue}
            column={id}
          />
        ))
      ) : (
        <Text textAlign="center">No issues</Text>
      )}
    </VStack>
  );
};
