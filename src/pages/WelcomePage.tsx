import {
  Box,
  Text,
  Image,
  VStack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import { PAGE_BANNERS } from "../data/bannerContent";
import PageSidebar from "../components/shared/PageSidebar";
import PageContent from "../components/shared/PageContent";
import Section from "../components/shared/Section";
import {
  WELCOME_CONTENT,
  POPULAR_PAGES_HOME,
  DEPARTMENTS_HOME,
} from "../data/pageContent";
import { colors, glassCard, layout } from "../theme/tokens";

const WelcomePage = () => (
  <PageLayout>
    <PageBanner {...PAGE_BANNERS.about} />

    <PageContent sidebar={<PageSidebar popularPages={POPULAR_PAGES_HOME} departments={DEPARTMENTS_HOME} />}>
      <VStack align="stretch" spacing={layout.contentStack}>
            <Box
              borderRadius="24px"
              overflow="hidden"
              boxShadow="0 16px 48px rgba(11, 31, 77, 0.1)"
              border="1px solid rgba(255,255,255,0.6)"
            >
              <Image
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80&auto=format&fit=crop"
                alt="Welcome to KJ"
                w="100%"
                h={{ base: "200px", md: "320px" }}
                objectFit="cover"
              />
            </Box>

            <Box>
              <Text fontSize="2xl" fontWeight="800" color="brand.500" mb={6}>
                Welcome...
              </Text>
              <VStack align="stretch" spacing={5}>
                {WELCOME_CONTENT.paragraphs.map((para) => (
                  <Text key={para.slice(0, 40)} fontSize="md" color="text.secondary" lineHeight="1.85">
                    {para}
                  </Text>
                ))}
              </VStack>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="700" color="brand.500" mb={5}>
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
                    <Text fontSize="sm" fontWeight="700" color="text.primary" mb={1}>
                      {trustee.name}
                    </Text>
                    <Text fontSize="xs" fontWeight="500" color="text.muted">
                      {trustee.role}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="700" color="brand.500" mb={5}>
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
                      <Text fontSize="sm" fontWeight="700" color="brand.500">
                        {link.label}
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
      </VStack>
    </PageContent>

    <Section compact bg={colors.overlay.light} id="management">
        <Text
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="800"
          color="brand.500"
          textAlign="center"
          mb={layout.headerMb}
        >
          Management — Saraswati Infotech Education Trust — SIET
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={layout.gridGap}>
          {WELCOME_CONTENT.management.map((person) => (
            <Box
              key={person.name}
              overflow="hidden"
              {...glassCard}
              _hover={{ transform: "translateY(-6px)", boxShadow: "0 20px 48px rgba(11,31,77,0.12)" }}
              transition="all 0.35s ease"
            >
              <Image src={person.image} alt={person.name} h="220px" w="100%" objectFit="cover" objectPosition="top" />
              <Box p={5} textAlign="center">
                <Text fontSize="sm" fontWeight="700" color="text.primary" mb={1}>
                  {person.name}
                </Text>
                <Text fontSize="xs" fontWeight="500" color="text.muted">
                  {person.role}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
    </Section>
  </PageLayout>
);

export default WelcomePage;
