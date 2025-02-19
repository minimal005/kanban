import { Button, ButtonGroup, Flex, Input } from "@chakra-ui/react";

export const Form = () => {
  return (
    <Flex as="form" h={10} align="center" gap="5">
      <Input placeholder="Enter repo URL" />
      <ButtonGroup size="sm" variant="outline">
        <Button w="10" h="10" display="flex" alignItems="center"></Button>
        <Button h="10"> Load issues</Button>
      </ButtonGroup>
    </Flex>
  );
};
