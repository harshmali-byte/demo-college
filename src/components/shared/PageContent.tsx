import type { ReactNode } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { layout } from "../../theme/tokens";
import PageContainer from "./PageContainer";

type PageContentProps = {
  children: ReactNode;
  sidebar?: ReactNode;
  py?: typeof layout.pagePy;
};

const PageContent = ({ children, sidebar, py = layout.pagePy }: PageContentProps) => (
  <PageContainer py={py}>
    <Grid
      templateColumns={{ base: "1fr", lg: sidebar ? "minmax(0, 1fr) 320px" : "1fr" }}
      gap={layout.pageGridGap}
      alignItems="start"
    >
      <GridItem minW={0}>{children}</GridItem>
      {sidebar && <GridItem>{sidebar}</GridItem>}
    </Grid>
  </PageContainer>
);

export default PageContent;
