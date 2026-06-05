import { VStack, Text, type StackProps } from "@chakra-ui/react";
import { layout } from "../../theme/tokens";

type SectionHeaderProps = StackProps & {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = "center",
  ...props
}: SectionHeaderProps) => (
  <VStack
    spacing={{ base: 3, md: 4 }}
    mb={layout.headerMb}
    textAlign={align}
    align={align === "center" ? "center" : "flex-start"}
    maxW={align === "center" ? "720px" : "100%"}
    mx={align === "center" ? "auto" : undefined}
    {...props}
  >
    {badge && (
      <Text variant="label">{badge}</Text>
    )}
    <Text
      as="h2"
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      fontWeight="800"
      color="brand.500"
      lineHeight="1.15"
      letterSpacing="-0.02em"
    >
      {title}
    </Text>
    {subtitle && (
      <Text fontSize={{ base: "sm", md: "md" }} color="text.secondary" lineHeight="1.75" maxW="640px">
        {subtitle}
      </Text>
    )}
  </VStack>
);

export default SectionHeader;
