import { Issue } from "@/utils/types/Issue";
import { Box, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Collapse } from "@chakra-ui/transition";

import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";
import { Card } from "./Card";
import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "./icons/ChevronUpIcon";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";

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

  const [isOpen, setIsOpen] = useState(false);
  const isAccordion = useBreakpointValue({ base: true, md: false }) ?? true;

  useEffect(() => {
    if (isAccordion) {
      setIsOpen(false);
    }
  }, [issues, isAccordion]);

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const maxHeight = isAccordion && !isOpen ? "60px" : "100%";

  return (
    <VStack
      ref={ref}
      style={style}
      flex="1"
      p={4}
      w={isAccordion ? "calc(100vw - 30px)" : "full"}
      mx="auto"
      bg="gray.800"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="#ffffff11"
      maxH={maxHeight}
      align="stretch"
      onClick={() => {
        if (isAccordion) {
          setIsOpen((prev) => !prev);
        }
      }}
      cursor={isAccordion ? "pointer" : "default"}
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
        {isAccordion && (
          <Box
            aria-label={isOpen ? "Collapse" : "Expand"}
            onClick={handleToggle}
          >
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Box>
        )}
      </Flex>
      <Collapse
        in={!isAccordion || isOpen}
        animateOpacity
        startingHeight={0}
        unmountOnExit
        transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
      >
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
      </Collapse>
    </VStack>
  );
};
