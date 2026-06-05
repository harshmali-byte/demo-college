import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import PageSidebar from "../components/shared/PageSidebar";
import {
  WELCOME_CONTENT,
  POPULAR_PAGES_HOME,
  DEPARTMENTS_HOME,
} from "../data/pageContent";

const WelcomePage = () => (
  <PageLayout>
    <PageBanner
      title="Welcome to JK"
      bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&auto=format&fit=crop"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Welcome to JK" },
      ]}
    />

    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 10, md: 14 }}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 320px" }} gap={{ base: 10, lg: 12 }}>
        <GridItem>
          <VStack align="stretch" spacing={8}>
            <Box
              borderRadius="24px"
              overflow="hidden"
              boxShadow="0 16px 48px rgba(11, 31, 77, 0.1)"
              border="1px solid rgba(255,255,255,0.6)"
            >
              <Image
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80&auto=format&fit=crop"
                alt="Welcome to JK"
                w="100%"
                h={{ base: "200px", md: "320px" }}
                objectFit="cover"
              />
            </Box>

            <Box>
              <Text fontSize="2xl" fontWeight="800" color="#0B1F4D" mb={6}>
                Welcome...
              </Text>
              <VStack align="stretch" spacing={5}>
                {WELCOME_CONTENT.paragraphs.map((para) => (
                  <Text key={para.slice(0, 40)} fontSize="md" color="#475569" lineHeight="1.85">
                    {para}
                  </Text>
                ))}
              </VStack>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="700" color="#0B1F4D" mb={5}>
                Board of Trustees
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                {WELCOME_CONTENT.trustees.map((trustee) => (
                  <Box
                    key={trustee.name}
                    p={5}
                    borderRadius="16px"
                    bg={`${trustee.color}18`}
                    borderLeft="4px solid"
                    borderColor={trustee.color}
                    _hover={{ transform: "translateY(-3px)", boxShadow: "0 8px 24px rgba(11,31,77,0.08)" }}
                    transition="all 0.25s ease"
                  >
                    <Text fontSize="sm" fontWeight="700" color="#0F172A" mb={1}>
                      {trustee.name}
                    </Text>
                    <Text fontSize="xs" fontWeight="500" color="#64748B">
                      {trustee.role}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="700" color="#0B1F4D" mb={5}>
                Quick Links
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={5}>
                {WELCOME_CONTENT.quickLinks.map((link) => (
                  <Box
                    key={link.label}
                    borderRadius="20px"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.65)"
                    border="1px solid rgba(255,255,255,0.7)"
                    boxShadow="0 8px 32px rgba(11, 31, 77, 0.06)"
                    _hover={{ transform: "translateY(-6px)", boxShadow: "0 16px 40px rgba(11,31,77,0.12)" }}
                    transition="all 0.3s ease"
                    cursor="pointer"
                  >
                    <Image src={link.image} alt={link.label} h="140px" w="100%" objectFit="cover" />
                    <Flex px={5} py={4} justify="center">
                      <Text fontSize="sm" fontWeight="700" color="#0B1F4D">
                        {link.label}
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <PageSidebar popularPages={POPULAR_PAGES_HOME} departments={DEPARTMENTS_HOME} />
        </GridItem>
      </Grid>
    </Container>

    <Box bg="rgba(11, 31, 77, 0.03)" py={{ base: 12, md: 16 }}>
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="800"
          color="#0B1F4D"
          textAlign="center"
          mb={10}
        >
          Management — Saraswati Infotech Education Trust — SIET
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6}>
          {WELCOME_CONTENT.management.map((person) => (
            <Box
              key={person.name}
              borderRadius="24px"
              overflow="hidden"
              bg="rgba(255,255,255,0.75)"
              backdropFilter="blur(12px)"
              border="1px solid rgba(255,255,255,0.6)"
              boxShadow="0 8px 32px rgba(11, 31, 77, 0.08)"
              _hover={{ transform: "translateY(-6px)", boxShadow: "0 20px 48px rgba(11,31,77,0.12)" }}
              transition="all 0.35s ease"
              sx={{ WebkitBackdropFilter: "blur(12px)" }}
            >
              <Image src={person.image} alt={person.name} h="220px" w="100%" objectFit="cover" objectPosition="top" />
              <Box p={5} textAlign="center">
                <Text fontSize="sm" fontWeight="700" color="#0F172A" mb={1}>
                  {person.name}
                </Text>
                <Text fontSize="xs" fontWeight="500" color="#64748B">
                  {person.role}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  </PageLayout>
);

export default WelcomePage;
