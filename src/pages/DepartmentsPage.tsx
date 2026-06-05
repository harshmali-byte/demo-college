import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  VStack,
} from "@chakra-ui/react";
import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import { PAGE_BANNERS } from "../data/bannerContent";
import Section from "../components/shared/Section";
import { DEPARTMENT_LIST } from "../data/departmentContent";
import { colors, layout } from "../theme/tokens";

const DeptIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, JSX.Element> = {
    globe: (
      <Box as="svg" w="48px" h="48px" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </Box>
    ),
    chart: (
      <Box as="svg" w="48px" h="48px" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="6 14 12 4 18 10" />
      </Box>
    ),
    book: (
      <Box as="svg" w="48px" h="48px" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </Box>
    ),
  };
  return icons[icon] ?? icons.globe;
};

const DepartmentsPage = () => (
  <PageLayout>
    <PageBanner {...PAGE_BANNERS.departments} />

    <Section compact>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={layout.pageGridGap}
          p={{ base: 8, md: 10, lg: 12 }}
          borderRadius="28px"
          bg={colors.gradient.brand}
          boxShadow="0 24px 64px rgba(11,31,77,0.2)"
        >
          <Box flex={1}>
            <Text
              fontSize={{ base: "2xl", md: "3xl", lg: "3.5rem" }}
              fontWeight="800"
              color="white"
              lineHeight="1.15"
              letterSpacing="-0.02em"
            >
              Best Platform to Learn IT & Science Courses
            </Text>
          </Box>

          <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }} gap={5} flex={1.2} w="100%">
            {DEPARTMENT_LIST.map((dept) => (
              <GridItem key={dept.slug}>
                <Box
                  as={RouterLink}
                  to={dept.href}
                  display="block"
                  p={6}
                  borderRadius="24px"
                  bg={dept.color}
                  textAlign="center"
                  minH="200px"
                  boxShadow="0 12px 40px rgba(0,0,0,0.15)"
                  _hover={{
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 20px 56px rgba(0,0,0,0.25)",
                    textDecoration: "none",
                  }}
                  transition="all 0.35s ease"
                >
                  <VStack spacing={4} justify="center" h="100%">
                    <Flex w="80px" h="80px" borderRadius="20px" bg="rgba(255,255,255,0.2)" align="center" justify="center">
                      <DeptIcon icon={dept.icon} />
                    </Flex>
                    <Text fontSize="sm" fontWeight="800" color="white" lineHeight="1.4">
                      {dept.title}
                    </Text>
                    <Text fontSize="2xs" color="rgba(255,255,255,0.8)" fontWeight="500">
                      {dept.subtitle}
                    </Text>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Flex>
    </Section>
  </PageLayout>
);

export default DepartmentsPage;
