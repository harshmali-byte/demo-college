import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <Box bg="#F7FAFC" minH="100vh">
    <TopBar />
    <Navbar />
    {children}
    <Footer />
  </Box>
);

export default PageLayout;
