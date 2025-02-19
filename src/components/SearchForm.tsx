import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  return (
    <Flex as="section" mb={4} gap={2}>
      <Flex
        bg="gray.800"
        w="320px"
        h="100%"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#ffffff11"
        transition="border-color 0.3s linear"
        _hover={{
          borderColor: "blue.600",
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
          transition="color 0.3s linear, border-left-color 0.3s linear"
          _hover={{ color: "#b49135", borderLeftColor: "blue.500" }}
        >
          ✖
        </Flex>
      </Flex>
      <Button
        bgColor="#3f3f4694"
        h="100%"
        color="gray.400"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#ffffff11"
        borderRadius="md"
        transition="border-color 0.3s linear, color 0.3s linear"
        _hover={{ borderColor: "blue.600", color: "#b49135" }}
      >
        Load Issues
      </Button>
    </Flex>
  );
};
