import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <Box bg="bg.canvas" minH="100vh" display="flex" flexDirection="column">
    <Navbar />
    <Box as="main" flex="1">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default PageLayout;
