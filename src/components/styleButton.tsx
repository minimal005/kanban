import { IconButton } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useColorMode } from "@/components/ui/color-mode";

export default function ColorModeButton() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={toggleColorMode}
      fontSize="24px"
      padding="10px"
      borderColor={{ base: "gray.400", _dark: "gray.700" }}
      bg={{ base: "gray.100", _dark: "gray.800" }}
      color={{ base: "gray.700", _dark: "gray.400" }}
      borderRadius="md"
      transition="border-color 0.3s linear, color 0.3s linear"
      _hover={{ borderColor: "blue.600", color: "var(--yellow-color)" }}
    >
      {colorMode === "light" ? <BsMoon /> : <BsSun />}
    </IconButton>
  );
}
