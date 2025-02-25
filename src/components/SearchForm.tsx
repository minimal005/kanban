import { useEffect, useState } from "react";
import { Box, Button, Flex, Input, useBreakpointValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  fetchIssues,
  fetchRepoDetails,
  setIssues,
  setPath,
} from "@/features/issuesSlice";

type Inputs = {
  searchField: string;
};

const githubURL = "https://github.com/";

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const { path, open, inProgress, done } = useAppSelector(
    (state) => state.issues
  );
  console.log(path);
  const [repo, setRepo] = useState(path);

  const isFullWidth = useBreakpointValue({ base: true, md: false }) ?? true;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      searchField: repo ? `${githubURL}${repo}` : githubURL,
    },
  });
  const partPath = repo.replace("https://github.com/", "");

  useEffect(() => {
    if (!!open.length || !!inProgress.length || !!done.length) {
      dispatch(setPath(partPath));
    }
  }, [open, inProgress, done, dispatch]);

  const handleClickRepo: SubmitHandler<Inputs> = () => {
    if (repo) {
      dispatch(fetchIssues(partPath));
      dispatch(fetchRepoDetails(partPath));
    }
  };

  const handleReset = () => {
    dispatch(setIssues({ open: [], inProgress: [], done: [] }));
    dispatch(setPath(""));
    reset({ searchField: githubURL });
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
                value.startsWith(githubURL) ||
                `Enter a valid GitHub URL, e.g. https://github.com/facebook/react`,
            })}
            onChange={(e) => setRepo(e.target.value)}
            className="searchField"
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
