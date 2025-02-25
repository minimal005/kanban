import { useAppSelector } from "@/app/hooks";
import { Breadcrumb } from "@chakra-ui/react";
export const BreadCrumbs = () => {
  const path = useAppSelector((state) => state.issues.path);

  const parentPath = path.split("/")[0]?.toLowerCase() || null;
  const childPath = path.split("/")[1]?.toLowerCase() || null;

  console.log(path);

  return (
    <Breadcrumb.Root size="md" ml="5px">
      <Breadcrumb.List>
        <Breadcrumb.Item textStyle="sm">
          <Breadcrumb.Link
            href={`https://github.com/${parentPath}`}
            target="_blank"
            color="blue.500"
            _hover={{ color: "blue.600", transition: "color 0.3s ease-in-out" }}
            _focus={{ outline: "none" }}
          >
            {parentPath}
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item textStyle="sm">
          <Breadcrumb.Link
            href={`https://github.com/${path}`}
            target="_blank"
            color="blue.500"
            _hover={{ color: "blue.600", transition: "color 0.3s ease-in-out" }}
            _focus={{ outline: "none" }}
          >
            {childPath}
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
