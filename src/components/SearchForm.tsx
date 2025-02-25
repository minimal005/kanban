import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Flex, Input, useBreakpointValue } from "@chakra-ui/react";
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
      searchField: repo ? `${GITHUB_URL}${repo}` : GITHUB_URL,
    },
  });
  const partPath = repo.replace(GITHUB_URL, "");

  const handleClickRepo: SubmitHandler<Inputs> = () => {
    if (repo) {
      dispatch(fetchIssues(partPath));
      dispatch(fetchRepoDetails(partPath));
      dispatch(setPath(partPath));
    }
  };

  const handleReset = () => {
    dispatch(setIssues({ open: [], inProgress: [], done: [] }));
    dispatch(setPath(""));
    reset({ searchField: GITHUB_URL });
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
          bg="gray.800"
          w="full"
          h="100%"
          alignItems="center"
          borderRadius="md"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="var(--bg-column)"
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
            {...register("searchField", {
              required: "This field is required",
              validate: (value) =>
                value.startsWith(GITHUB_URL) ||
                `Enter a valid GitHub URL, e.g. ${GITHUB_URL}facebook/react`,
            })}
            onChange={(e) => setRepo(e.target.value)}
            className="searchField"
            _selection={{
              backgroundColor: "var(--bg-column)",
              color: "blue.400",
            }}
          />
          <Button
            type="button"
            w="42px"
            onClick={handleReset}
            alignItems="center"
            display="flex"
            boxSizing="border-box"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="transparent"
            color="white"
            borderLeftRadius="none"
            background="transparent"
            borderLeftColor="gray.700"
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
          bgColor="var(--bg-card)"
          h="100%"
          color="gray.400"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="var(--bg-column)"
          borderRadius="md"
          transition="border-color 0.3s linear, color 0.3s linear"
          _hover={{ borderColor: "blue.600", color: "var(--yellow-color)" }}
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
    </Box>
  );
};
