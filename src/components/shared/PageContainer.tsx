import type { ReactNode } from "react";
import { Container, type ContainerProps } from "@chakra-ui/react";
import { layout } from "../../theme/tokens";

type PageContainerProps = ContainerProps & {
  children: ReactNode;
};

const PageContainer = ({ children, ...props }: PageContainerProps) => (
  <Container
    maxW={layout.containerMaxW}
    px={layout.containerPx}
    {...props}
  >
    {children}
  </Container>
);

export default PageContainer;
