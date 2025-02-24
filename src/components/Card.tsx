import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/react/sortable";
// import { format } from "date-fns";
import { Issue } from "@/types/Issue";

type Props = {
  id: number;
  index: number;
  issue: Issue;
  column: string;
};
export const Card: React.FC<Props> = (props) => {
  const { id, index, issue, column } = props;
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
    group: column,
  });

  return (
    <Box
      as="article"
      ref={ref}
      data-dragging={isDragging}
      bg="var(--bg-card)"
      p={4}
      mb={2}
      w={"100%"}
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
      <Text fontWeight="bold" color="var(--yellow-color)">
        {issue.title}
      </Text>
      <Text fontSize="sm" color="gray.300">
        {/* #{issue.id} {column} {format(new Date(issue.date), "MMM dd yyyy")} */}
      </Text>
      <Text fontSize="sm" color="gray.300">
        <Link
          href={`http://github.com/${issue.author}`}
          target="_blank"
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
        >
          {" "}
          {issue.author}
        </Link>{" "}
        |{" "}
        <Text color="gray.400" as={"span"}>
          comments:
        </Text>{" "}
        {issue.comments}
      </Text>
    </Box>
  );
};
