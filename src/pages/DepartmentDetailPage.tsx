import { useParams, Navigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  HStack,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import PageContent from "../components/shared/PageContent";
import { DEPARTMENTS, DEPARTMENT_LIST } from "../data/departmentContent";
import type { DeptNavButton } from "../data/departmentContent";
import { colors, glassCard, layout } from "../theme/tokens";

const CheckIcon = () => (
  <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="var(--chakra-colors-accent-teal)" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </Box>
);

const NavButtonRow = ({ label, buttons }: { label: string; buttons: DeptNavButton[] }) => (
  <Flex
    direction={{ base: "column", md: "row" }}
    align={{ md: "center" }}
    justify="space-between"
    gap={4}
    p={{ base: 5, md: 6 }}
    borderRadius="20px"
    bg={colors.gradient.brand}
    boxShadow="0 8px 32px rgba(11,31,77,0.15)"
  >
    <Text fontSize="md" fontWeight="700" color="white" whiteSpace="nowrap">
      {label}
    </Text>
    <HStack spacing={3} flexWrap="wrap" justify={{ base: "flex-start", md: "flex-end" }}>
      {buttons.map((btn) => (
        <Button
          key={btn.label}
          as={RouterLink}
          to={btn.href ?? "#"}
          size="md"
          fontWeight="700"
          borderRadius="xl"
          bg={btn.color}
          color="white"
          px={6}
          _hover={{ transform: "translateY(-2px)", opacity: 0.9 }}
          transition="all 0.25s"
        >
          {btn.label}
        </Button>
      ))}
    </HStack>
  </Flex>
);

const TechnologiesSidebar = ({ technologies }: { technologies: { label: string; image: string }[] }) => (
  <Box
    position={{ lg: "sticky" }}
    top="100px"
    {...glassCard}
    p={6}
  >
    <Text
      fontSize="lg"
      fontWeight="800"
      color="brand.500"
      mb={5}
      pb={3}
      borderBottom="2px solid"
      borderColor="accent.cyan"
    >
      Technologies in Syllabus
    </Text>
    <VStack spacing={4} align="stretch">
      {technologies.map((tech) => (
        <Box
          key={tech.label}
          borderRadius="16px"
          overflow="hidden"
          border={`1px solid ${colors.border.light}`}
          _hover={{ transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(11,31,77,0.1)" }}
          transition="all 0.25s"
        >
          <Image src={tech.image} alt={tech.label} h="100px" w="100%" objectFit="cover" />
          <Text px={4} py={3} fontSize="sm" fontWeight="700" color="brand.500">
            {tech.label}
          </Text>
        </Box>
      ))}
    </VStack>
  </Box>
);

const DepartmentDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dept = slug ? DEPARTMENTS[slug] : undefined;

  if (!dept) return <Navigate to="/departments" replace />;

  const otherDepts = DEPARTMENT_LIST.filter((d) => d.slug !== slug);

  return (
    <PageLayout>
      <PageBanner
        slides={dept.bannerSlides}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: dept.breadcrumb },
        ]}
      />

      <PageContent sidebar={<TechnologiesSidebar technologies={dept.technologies} />}>
            <VStack align="stretch" spacing={layout.contentStack}>
              <Box>
                <Text fontSize="2xl" fontWeight="800" color="brand.500" mb={5}>
                  {dept.title}
                </Text>
                <VStack align="stretch" spacing={4}>
                  {dept.paragraphs.map((p) => (
                    <Text key={p.slice(0, 40)} fontSize="md" color="text.secondary" lineHeight="1.85">
                      {p}
                    </Text>
                  ))}
                </VStack>
              </Box>

              {dept.bestPractices && (
                <Box>
                  <Text fontSize="lg" fontWeight="700" color="brand.500" mb={4}>
                    Best Practices
                  </Text>
                  <List spacing={3}>
                    {dept.bestPractices.map((item) => (
                      <ListItem key={item} display="flex" alignItems="flex-start">
                        <ListIcon as={() => <CheckIcon />} mt={1} />
                        <Text fontSize="sm" color="text.secondary" lineHeight="1.7">{item}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {dept.highlights && (
                <Box>
                  <Text fontSize="lg" fontWeight="700" color="brand.500" mb={4}>
                    Departmental Highlights
                  </Text>
                  <List spacing={3}>
                    {dept.highlights.map((item) => (
                      <ListItem key={item} display="flex" alignItems="flex-start">
                        <ListIcon as={() => <CheckIcon />} mt={1} />
                        <Text fontSize="sm" color="text.secondary" lineHeight="1.7">{item}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {dept.industryLinkage && (
                <Box
                  p={6}
                  borderRadius="20px"
                  bg={colors.surface.muted}
                  border={`1px solid ${colors.border.light}`}
                >
                  <Text fontSize="lg" fontWeight="700" color="brand.500" mb={3}>
                    Industry Linkage
                  </Text>
                  <Text fontSize="sm" color="text.secondary" lineHeight="1.8" mb={4}>
                    {dept.industryLinkage.text}
                  </Text>
                  <Flex gap={2} flexWrap="wrap">
                    {dept.industryLinkage.partners.map((p) => (
                      <Box key={p} px={3} py={1.5} borderRadius="full" bg="white" border={`1px solid ${colors.border.light}`}>
                        <Text fontSize="xs" fontWeight="600" color="brand.500">{p}</Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>
              )}

              {(dept.ugPrograms.length > 0 || dept.pgPrograms.length > 0) && (
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  {dept.ugPrograms.length > 0 && (
                    <Box p={5} borderRadius="20px" bg="rgba(0,212,255,0.06)" border="1px solid rgba(0,212,255,0.15)">
                      <Text fontSize="sm" fontWeight="700" color="brand.500" mb={3} textTransform="uppercase" letterSpacing="wider">
                        Under Graduate (UG)
                      </Text>
                      <VStack align="stretch" spacing={2}>
                        {dept.ugPrograms.map((p) => (
                          <Text key={p} fontSize="sm" color="text.secondary">• {p}</Text>
                        ))}
                      </VStack>
                    </Box>
                  )}
                  {dept.pgPrograms.length > 0 && (
                    <Box p={5} borderRadius="20px" bg="rgba(0,191,165,0.06)" border="1px solid rgba(0,191,165,0.15)">
                      <Text fontSize="sm" fontWeight="700" color="brand.500" mb={3} textTransform="uppercase" letterSpacing="wider">
                        Post Graduate (PG)
                      </Text>
                      <VStack align="stretch" spacing={2}>
                        {dept.pgPrograms.map((p) => (
                          <Text key={p} fontSize="sm" color="text.secondary">• {p}</Text>
                        ))}
                      </VStack>
                    </Box>
                  )}
                </SimpleGrid>
              )}

              {dept.features.length > 0 && (
                <Box>
                  <Text fontSize="lg" fontWeight="700" color="brand.500" mb={4}>Key Features</Text>
                  <List spacing={3}>
                    {dept.features.map((f) => (
                      <ListItem key={f} display="flex" alignItems="flex-start">
                        <ListIcon as={() => <CheckIcon />} mt={1} />
                        <Text fontSize="sm" color="text.secondary" lineHeight="1.7">{f}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              <VStack spacing={4} align="stretch">
                <NavButtonRow
                  label={dept.slug === "it" ? "I.T. Department" : dept.slug === "bioscience" ? "Bioscience Department" : "Chemistry Department"}
                  buttons={dept.deptNavButtons}
                />
                <NavButtonRow
                  label={dept.slug === "it" ? "I.T. Courses" : dept.slug === "bioscience" ? "Bioscience Courses" : "Chemistry Courses"}
                  buttons={dept.courseNavButtons}
                />
              </VStack>

              <Box py={8}>
                <Text fontSize="2xl" fontWeight="800" color="brand.500" textAlign="center" mb={8}>
                  {dept.careerTitle}
                </Text>
                <Box position="relative" p={{ base: 6, md: 10 }} borderRadius="28px" bg="rgba(11,31,77,0.03)" border="1px solid rgba(11,31,77,0.06)">
                  <Flex
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="80px"
                    h="80px"
                    borderRadius="full"
                    bg={colors.gradient.brand}
                    align="center"
                    justify="center"
                    display={{ base: "none", md: "flex" }}
                    boxShadow="0 8px 32px rgba(11,31,77,0.2)"
                  >
                    <Box as="svg" w="36px" h="36px" viewBox="0 0 24 24" fill="white">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </Box>
                  </Flex>
                  <SimpleGrid columns={{ base: 1, md: dept.careerGroups.length > 2 ? 3 : 2 }} gap={6}>
                    {dept.careerGroups.map((group) => (
                      <Box
                        key={group.title}
                        p={5}
                        borderRadius="20px"
                        bg="white"
                        boxShadow="0 4px 20px rgba(11,31,77,0.06)"
                        border="1px solid rgba(11,31,77,0.06)"
                      >
                        <Text fontSize="sm" fontWeight="800" color="brand.500" mb={3} textTransform="uppercase" letterSpacing="wider">
                          {group.title}
                        </Text>
                        <VStack align="stretch" spacing={2}>
                          {group.items.map((item) => (
                            <HStack key={item} spacing={2} align="flex-start">
                              <Text color="accent.cyan" fontSize="xs" mt={1}>›</Text>
                              <Text fontSize="xs" color="text.secondary" lineHeight="1.6">{item}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>

              {otherDepts.length > 0 && (
                <Box>
                  <Text fontSize="lg" fontWeight="700" color="brand.500" mb={4}>Other Departments</Text>
                  <HStack spacing={4} flexWrap="wrap">
                    {otherDepts.map((d) => (
                      <Button
                        key={d.slug}
                        as={RouterLink}
                        to={d.href}
                        size="sm"
                        fontWeight="600"
                        borderRadius="xl"
                        variant="outline"
                        borderColor={colors.border.medium}
                        color="brand.500"
                        _hover={{ bg: d.color, color: "white", borderColor: d.color }}
                      >
                        {d.title}
                      </Button>
                    ))}
                  </HStack>
                </Box>
              )}
            </VStack>
      </PageContent>
    </PageLayout>
  );
};

export default DepartmentDetailPage;
