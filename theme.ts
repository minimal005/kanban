import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      phone: "320px",
      tablet: "900px",
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
