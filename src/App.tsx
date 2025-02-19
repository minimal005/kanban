import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";

import { Column } from "./components/Column";
import { Issue } from "./utils/types/Issue";
import { BreadCrumbs } from "./components/BreadCrumbs";

const issues: Issue[] = [
  {
    id: 12,
    title: "How can I create my own link",
    date: "Fri Dec 13 2024 ",
    status: "open",
    author: "Lonelybhadboi",
    comments: 0,
  },
  {
    id: 10,
    title: "Termux camdumper",
    date: "Tue Feb 27 2024",
    status: "open",
    author: "Salik00790",
    comments: 1,
  },
  {
    id: 9,
    title: "Hack Cam",
    date: "Wed Oct 11 2023",
    status: "open",
    author: "S0say",
    comments: 0,
  },
  {
    id: 7,
    title: "Link not generating",
    date: "Jan 27 2023",
    status: "open",
    author: "Baka-U",
    comments: 1,
  },
];

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <Box p={6} bg="gray.900" minH="100vh" color="gray.400">
      <Flex mb={4} gap={2}>
        <Flex
          bg="gray.800"
          w="320px"
          borderRadius="md"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="#ffffff11"
          _hover={{
            borderColor: "blue.600",
            transition: "color 0.3s ease-in-out",
          }}
          _focus={{
            borderColor: "blue.600",
            transition: "color 0.3s ease-in-out",
          }}
        >
          <Input
            className="searchField"
            placeholder="Search issues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Flex
            w="45px"
            alignItems="center"
            justify="center"
            borderLeftStyle="solid"
            borderLeftWidth="1px"
            borderLeftColor="gray.700"
            cursor="pointer"
            _hover={{ color: "blue.600", transition: "color 0.3s ease-in-out" }}
          >
            ✖
          </Flex>
        </Flex>
        <Button
          bgColor="gray.700"
          h="100%"
          color="gray.400"
          _hover={{ borderColor: "blue.600" }}
        >
          Load Issues
        </Button>
      </Flex>
      <Flex mb={4} align="center" gap="15px">
        <BreadCrumbs />
        <Flex align="center" gap="5px">
          <Text as="span">933 stars</Text>
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Column
          title="Open"
          issues={issues.filter((i) => i.status === "open")}
        />
        <Column
          title="InProgress"
          issues={issues.filter((i) => i.status === "inProgress")}
        />
        <Column
          title="Closed"
          issues={issues.filter((i) => i.status === "closed")}
        />
      </Grid>
    </Box>
  );
};
