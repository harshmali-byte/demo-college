import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Flex,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import PageSidebar from "../components/shared/PageSidebar";
import {
  ADMISSION_ELIGIBILITY,
  ADMISSION_DOCUMENTS,
  POPULAR_PAGES_ADMISSION,
  DEPARTMENTS_ADMISSION,
} from "../data/pageContent";

const CheckIcon = () => (
  <Box as="svg" w="18px" h="18px" viewBox="0 0 24 24" fill="none" stroke="#43A047" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </Box>
);

const AdmissionPage = () => (
  <PageLayout>
    <PageBanner
      title="Admission Process"
      bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&auto=format&fit=crop"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Admission Process" },
      ]}
    />

    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 10, md: 14 }}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 320px" }} gap={{ base: 10, lg: 12 }}>
        <GridItem>
          <VStack align="stretch" spacing={8}>
            <Box
              borderRadius="20px"
              overflow="hidden"
              bg="linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)"
              p={{ base: 6, md: 8 }}
              position="relative"
            >
              <Box
                position="absolute"
                right={4}
                top="50%"
                transform="translateY(-50%)"
                opacity={0.15}
                display={{ base: "none", md: "block" }}
              >
                <Box as="svg" w="120px" h="120px" viewBox="0 0 24 24" fill="white">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </Box>
              </Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="white">
                Admission Procedure
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)" mt={2} maxW="500px">
                Explore eligibility criteria and required documents for all undergraduate and postgraduate programs.
              </Text>
            </Box>

            <Box
              borderRadius="24px"
              overflow="hidden"
              bg="linear-gradient(180deg, #2d2451 0%, #1e1838 100%)"
              p={{ base: 5, md: 6 }}
            >
              <VStack align="stretch" spacing={4}>
                {ADMISSION_ELIGIBILITY.map((item) => (
                  <Box
                    key={item.degree}
                    p={{ base: 5, md: 6 }}
                    borderRadius="16px"
                    bg="rgba(255,255,255,0.06)"
                    border="1px solid rgba(255,255,255,0.1)"
                    _hover={{ bg: "rgba(255,255,255,0.09)" }}
                    transition="background 0.2s"
                  >
                    <Flex justify="space-between" align="flex-start" gap={4} flexWrap="wrap" mb={3}>
                      <Text fontSize="md" fontWeight="700" color="white">
                        {item.degree}
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="#FFB300"
                            color="#0B1F4D"
                            fontSize="xs"
                            fontWeight="700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </HStack>
                    </Flex>
                    <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight="1.8">
                      {item.text}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box
              p={{ base: 6, md: 8 }}
              borderRadius="24px"
              bg="rgba(255,255,255,0.7)"
              backdropFilter="blur(12px)"
              border="1px solid rgba(255,255,255,0.6)"
              boxShadow="0 8px 32px rgba(11, 31, 77, 0.06)"
              sx={{ WebkitBackdropFilter: "blur(12px)" }}
            >
              <Text fontSize="lg" fontWeight="700" color="#0B1F4D" mb={4}>
                Admission Procedure Details
              </Text>
              <VStack align="stretch" spacing={4}>
                <Text fontSize="sm" color="#475569" lineHeight="1.85">
                  Admission to all programs is granted as per the norms prescribed by Bhakta Kavi Narsinh Mehta University and the State Government of Gujarat. Candidates must submit the application form along with all required documents within the stipulated admission period.
                </Text>
                <Text fontSize="sm" color="#475569" lineHeight="1.85">
                  An application fee of{" "}
                  <Text as="span" fontWeight="700" color="#0B1F4D">
                    Rs. 100/-
                  </Text>{" "}
                  is payable in cash at the time of submission of the admission form.
                </Text>
              </VStack>
            </Box>

            <Box
              p={{ base: 6, md: 8 }}
              borderRadius="24px"
              bg="rgba(255,255,255,0.7)"
              backdropFilter="blur(12px)"
              border="1px solid rgba(255,255,255,0.6)"
              boxShadow="0 8px 32px rgba(11, 31, 77, 0.06)"
              sx={{ WebkitBackdropFilter: "blur(12px)" }}
            >
              <Text fontSize="lg" fontWeight="700" color="#0B1F4D" mb={5}>
                Required Documents
              </Text>
              <List spacing={3}>
                {ADMISSION_DOCUMENTS.map((doc) => (
                  <ListItem key={doc} display="flex" alignItems="flex-start">
                    <ListIcon as={() => <CheckIcon />} mt={0.5} />
                    <Text fontSize="sm" color="#475569" lineHeight="1.7">
                      {doc}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <PageSidebar popularPages={POPULAR_PAGES_ADMISSION} departments={DEPARTMENTS_ADMISSION} />
        </GridItem>
      </Grid>
    </Container>
  </PageLayout>
);

export default AdmissionPage;
