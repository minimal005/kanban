import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { format } from "date-fns";
import { Issue } from "@/types/Issue";
import { GITHUB_URL } from "@/utils/constants";

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
      bg={{ base: "white", _dark: "var(--bg-card)" }}
      p={4}
      mb={2}
      w={"100%"}
      borderRadius="md"
      shadow={{ base: "md", _dark: "xs" }}
      cursor="pointer"
      borderColor="transparent"
      borderStyle="solid"
      borderWidth="1px"
      transition="border-color 0.3s linear"
      _hover={{
        borderColor: "blue.600",
      }}
    >
      <Link
        href={issue.html_url.replace("api.github.com/repos", "github.com")}
        target="_blank"
        fontWeight="bold"
        marginBottom={2}
        color="var(--yellow-color)"
        transition="color 0.2s linear"
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        _hover={{
          color: "blue.500",
        }}
      >
        {issue.title}
      </Link>
      <Text fontSize="sm" color={{ base: "gray.700", _dark: "gray.300" }}>
        #{issue.id} {column}{" "}
        {issue.created_at
          ? format(new Date(issue.created_at), "MMM dd yyyy")
          : ""}
      </Text>
      <Text fontSize="sm" color={{ base: "gray.700", _dark: "gray.300" }}>
        <Link
          href={`${GITHUB_URL}${issue.user?.login}`}
          color="blue.500"
          target="_blank"
          transition="color 0.2s linear"
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
          _hover={{
            color: "var(--yellow-color)",
          }}
        >
          {" "}
          {issue.user?.login}
        </Link>{" "}
        |{" "}
        <Text color="gray.400" as="span">
          comments:
        </Text>{" "}
        {issue.comments}
      </Text>
    </Box>
  );
};
