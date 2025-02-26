import React from "react";
import { useDroppable } from "@dnd-kit/react";
import { Flex, VStack } from "@chakra-ui/react";

import { CollisionPriority } from "@dnd-kit/abstract";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const Column: React.FC<Props> = ({ children, id }) => {
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
      bgColor={{ base: "gray.100", _dark: "gray.800" }}
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
        color={{ base: "gray.700", _dark: "blue.500" }}
        mb={3}
      >
        {statusStyle === "InProgress" ? "In Progress" : statusStyle}
      </Flex>

      {children}
    </VStack>
  );
};
