import { Box, Text, VStack, Link, Image, HStack, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type SidebarLink = { label: string; href: string };
type Department = { label: string; image: string };

type PageSidebarProps = {
  popularPages: SidebarLink[];
  departments: Department[];
};

const glassCard = {
  borderRadius: "20px",
  bg: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  boxShadow: "0 8px 32px rgba(11, 31, 77, 0.06)",
  sx: { WebkitBackdropFilter: "blur(12px)" },
};

const SidebarLinkItem = ({ label, href }: SidebarLink) => {
  const isExternal = href.startsWith("#");
  const content = (
    <HStack spacing={2} py={2} px={2} borderRadius="lg" _hover={{ bg: "rgba(11, 31, 77, 0.04)" }} transition="all 0.2s">
      <Text color="#FFB300" fontSize="xs" fontWeight="700">›</Text>
      <Text fontSize="sm" fontWeight="500" color="#0F172A">{label}</Text>
    </HStack>
  );

  if (isExternal) {
    return <Link href={href} _hover={{ textDecoration: "none" }}>{content}</Link>;
  }

  return <Link as={RouterLink} to={href} _hover={{ textDecoration: "none" }}>{content}</Link>;
};

const PageSidebar = ({ popularPages, departments }: PageSidebarProps) => (
  <VStack spacing={6} align="stretch" position={{ lg: "sticky" }} top="100px">
    <Box {...glassCard} p={6}>
      <Text fontSize="md" fontWeight="700" color="#0B1F4D" mb={4}>
        Popular Pages
      </Text>
      <VStack align="stretch" spacing={0}>
        {popularPages.map((page) => (
          <SidebarLinkItem key={page.label} {...page} />
        ))}
      </VStack>
    </Box>

    <Box {...glassCard} p={6} id="departments">
      <Text fontSize="md" fontWeight="700" color="#0B1F4D" mb={4}>
        Departments
      </Text>
      <VStack spacing={4} align="stretch">
        {departments.map((dept) => (
          <Box
            key={dept.label}
            borderRadius="16px"
            overflow="hidden"
            border="1px solid rgba(11, 31, 77, 0.08)"
            _hover={{ transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(11, 31, 77, 0.1)" }}
            transition="all 0.25s ease"
          >
            <Image src={dept.image} alt={dept.label} h="100px" w="100%" objectFit="cover" />
            <Flex px={4} py={3} bg="rgba(255,255,255,0.5)" align="center">
              <Text fontSize="sm" fontWeight="600" color="#0B1F4D">{dept.label}</Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  </VStack>
);

export default PageSidebar;
