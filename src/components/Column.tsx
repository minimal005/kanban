import { Issue } from "@/utils/types/Issue";
import { Text, VStack } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";
import { Card } from "./Card";
import React from "react";

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

  const style = isDropTarget ? { background: "#00000030" } : undefined;
  const statusStyle = id[0].toUpperCase() + id.slice(1);

  console.log(issues.length);
  return (
    <VStack
      ref={ref}
      style={style}
      flex="1"
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
        {statusStyle}
      </Text>
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
