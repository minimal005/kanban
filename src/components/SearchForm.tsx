import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Flex, Input, useBreakpointValue } from "@chakra-ui/react";
import { toaster, Toaster } from "@/components/ui/toaster";
import {
  fetchIssues,
  fetchRepoDetails,
  setIssues,
  setPath,
} from "@/features/issuesSlice";
import { GITHUB_URL } from "@/utils/constants";

type Inputs = {
  searchField: string;
};

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const { path } = useAppSelector((state) => state.issues);

  const [repo, setRepo] = useState(path);

  const isFullWidth = useBreakpointValue({ base: true, md: false }) ?? true;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      searchField: repo && `${GITHUB_URL}${repo}`,
    },
  });
  const partPath = repo.replace(GITHUB_URL, "");

  const handleClickRepo: SubmitHandler<Inputs> = async () => {
    if (repo) {
      try {
        await dispatch(fetchIssues(partPath)).unwrap();
        await dispatch(fetchRepoDetails(partPath)).unwrap();
        dispatch(setPath(partPath));

        toaster.create({
          title: "Success!",
          description: "Issues successfully loaded",
          type: "success",
        });
      } catch {
        toaster.create({
          title: "Error",
          description: `Failed to load issues. Please enter a GitHub URL, e.g. ${GITHUB_URL}facebook/react.`,
          type: "error",
        });
      }
    }
  };

  const handleReset = () => {
    dispatch(setIssues({ open: [], inProgress: [], done: [] }));
    dispatch(setPath(""));
    reset({ searchField: "" });
    setRepo("");

    toaster.create({
      title: "Reset",
      description: "Issues list has been cleared",
      type: "info",
    });
  };

  return (
    <Box as="section" mb={4}>
      <Flex
        as="form"
        wrap={isFullWidth ? "wrap" : "noWrap"}
        onSubmit={handleSubmit(handleClickRepo)}
        columnGap={2}
        rowGap={4}
      >
        <Flex
          bg={{ base: "gray.100", _dark: "gray.800" }}
          w="full"
          h="100%"
          alignItems="center"
          borderRadius="md"
          borderStyle="solid"
          borderWidth="1px"
          borderColor={{ base: "gray.400", _dark: "var(--bg-column)" }}
          transition="border-color 0.3s linear, color 0.3s linear"
          _hover={{ borderColor: "blue.600", color: "var(--yellow-color)" }}
          _focus={{
            borderColor: "blue.600",
            transition: "color 0.3s ease-in-out",
          }}
        >
          <Input
            {...register("searchField", {
              required: `This field is required. Enter a GitHub URL, e.g. ${GITHUB_URL}facebook/react`,
              validate: (value) =>
                value.startsWith(GITHUB_URL) ||
                `Enter a valid GitHub URL, e.g. ${GITHUB_URL}facebook/react`,
            })}
            onChange={(e) => setRepo(e.target.value)}
            color={{ base: "gray.700", _dark: "gray.400" }}
            className="searchField"
            _selection={{
              backgroundColor: "var(--bg-column)",
              color: "blue.400",
            }}
          />
          <Button
            type="button"
            w="40px"
            onClick={handleReset}
            alignItems="center"
            display="flex"
            boxSizing="border-box"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="transparent"
            color={{ base: "gray.700", _dark: "gray.400" }}
            borderLeftRadius="none"
            background="transparent"
            borderLeftColor={{ base: "gray.400", _dark: "gray.700" }}
            cursor="pointer"
            _focus={{
              outline: "none",
              boxShadow: "none",
            }}
            transition="color 0.3s linear, border-left-color 0.3s linear"
            _hover={{
              color: "var(--yellow-color)",
              borderLeftColor: "blue.500",
            }}
          >
            ✖
          </Button>
        </Flex>
        <Button
          type="submit"
          bgColor={{ base: "gray.100", _dark: "var(--bg-card)" }}
          h="42px"
          color={{ base: "gray.700", _dark: "gray.400" }}
          borderStyle="solid"
          borderWidth="1px"
          borderColor={{ base: "gray.400", _dark: "var(--bg-column)" }}
          borderRadius="md"
          transition="border-color 0.3s linear, color 0.3s linear"
          _hover={{ borderColor: "blue.600", color: "var(--yellow-color)" }}
          _active={{ borderColor: "blue.600", color: "var(--yellow-color)" }}
        >
          Load Issues
        </Button>
      </Flex>
      {errors.searchField?.message && (
        <Box
          textAlign="left"
          marginTop="5px"
          marginLeft="3px"
          color="red"
          fontWeight="300"
        >
          {errors.searchField.message}
        </Box>
      )}
      <Toaster />
    </Box>
  );
};
