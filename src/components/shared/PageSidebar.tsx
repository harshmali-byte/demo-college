import { Box, Text, VStack, Link, Image, HStack, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { colors, glassCard, layout } from "../../theme/tokens";

type SidebarLink = { label: string; href: string };
type Department = { label: string; image: string; href?: string };

type PageSidebarProps = {
  popularPages: SidebarLink[];
  departments: Department[];
};

const SidebarLinkItem = ({ label, href }: SidebarLink) => {
  const isExternal = href.startsWith("#");
  const content = (
    <HStack spacing={2} py={2} px={2} borderRadius="lg" _hover={{ bg: colors.surface.muted }} transition="all 0.2s">
      <Text color="accent.gold" fontSize="xs" fontWeight="700">›</Text>
      <Text fontSize="sm" fontWeight="500" color="text.primary">{label}</Text>
    </HStack>
  );

  if (isExternal) {
    return <Link href={href} _hover={{ textDecoration: "none" }}>{content}</Link>;
  }

  return <Link as={RouterLink} to={href} _hover={{ textDecoration: "none" }}>{content}</Link>;
};

const PageSidebar = ({ popularPages, departments }: PageSidebarProps) => (
  <VStack spacing={layout.contentStack} align="stretch" position={{ lg: "sticky" }} top="100px">
    <Box {...glassCard} p={{ base: 5, md: 6 }}>
      <Text fontSize="md" fontWeight="700" color="brand.500" mb={4}>
        Popular Pages
      </Text>
      <VStack align="stretch" spacing={0}>
        {popularPages.map((page) => (
          <SidebarLinkItem key={page.label} {...page} />
        ))}
      </VStack>
    </Box>

    <Box {...glassCard} p={{ base: 5, md: 6 }} id="departments">
      <Text fontSize="md" fontWeight="700" color="brand.500" mb={4}>
        Departments
      </Text>
      <VStack spacing={4} align="stretch">
        {departments.map((dept) => {
          const card = (
            <>
              <Image src={dept.image} alt={dept.label} h="100px" w="100%" objectFit="cover" />
              <Flex px={4} py={3} bg="rgba(255,255,255,0.5)" align="center">
                <Text fontSize="sm" fontWeight="600" color="brand.500">{dept.label}</Text>
              </Flex>
            </>
          );
          return dept.href ? (
            <Link
              key={dept.label}
              as={RouterLink}
              to={dept.href}
              borderRadius="16px"
              overflow="hidden"
              border={`1px solid ${colors.border.light}`}
              _hover={{ transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(11, 31, 77, 0.1)", textDecoration: "none" }}
              transition="all 0.25s ease"
              display="block"
            >
              {card}
            </Link>
          ) : (
            <Box
              key={dept.label}
              borderRadius="16px"
              overflow="hidden"
              border={`1px solid ${colors.border.light}`}
              _hover={{ transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(11, 31, 77, 0.1)" }}
              transition="all 0.25s ease"
            >
              {card}
            </Box>
          );
        })}
      </VStack>
    </Box>
  </VStack>
);

export default PageSidebar;
