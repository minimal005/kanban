"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export const Provider = ({ children, ...props }: ColorModeProviderProps) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props}>{children}</ColorModeProvider>
    </ChakraProvider>
  );
};
