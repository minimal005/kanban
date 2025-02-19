import { Breadcrumb } from "@chakra-ui/react";

export const BreadCrumbs = () => {
  return (
    <Breadcrumb.Root size="md" ml="5px">
      <Breadcrumb.List>
        <Breadcrumb.Item textStyle="sm">
          <Breadcrumb.Link
            href="#"
            color="blue.500"
            _hover={{ color: "blue.600", transition: "color 0.3s ease-in-out" }}
          >
            Facebook
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item textStyle="sm">
          <Breadcrumb.Link
            href="#"
            color="blue.500"
            _hover={{ color: "blue.600", transition: "color 0.3s ease-in-out" }}
          >
            React
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
