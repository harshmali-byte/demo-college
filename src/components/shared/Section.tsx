import type { ReactNode } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";
import { layout } from "../../theme/tokens";
import PageContainer from "./PageContainer";

type SectionProps = BoxProps & {
  children: ReactNode;
  compact?: boolean;
  tight?: boolean;
  contained?: boolean;
};

const Section = ({
  children,
  compact = false,
  tight = false,
  contained = true,
  py,
  ...props
}: SectionProps) => {
  const sectionPy = py ?? (tight ? layout.sectionPyTight : compact ? layout.sectionPyCompact : layout.sectionPy);

  return (
    <Box as="section" py={sectionPy} {...props}>
      {contained ? <PageContainer>{children}</PageContainer> : children}
    </Box>
  );
};

export default Section;
