import {
  Box,
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
import { PAGE_BANNERS } from "../data/bannerContent";
import PageSidebar from "../components/shared/PageSidebar";
import PageContent from "../components/shared/PageContent";
import {
  ADMISSION_ELIGIBILITY,
  ADMISSION_DOCUMENTS,
  POPULAR_PAGES_ADMISSION,
  DEPARTMENTS_ADMISSION,
} from "../data/pageContent";
import { colors, glassCard, layout } from "../theme/tokens";

const CheckIcon = () => (
  <Box as="svg" w="18px" h="18px" viewBox="0 0 24 24" fill="none" stroke="var(--chakra-colors-accent-teal)" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </Box>
);

const AdmissionPage = () => (
  <PageLayout>
    <PageBanner {...PAGE_BANNERS.admission} />

    <PageContent sidebar={<PageSidebar popularPages={POPULAR_PAGES_ADMISSION} departments={DEPARTMENTS_ADMISSION} />}>
      <VStack align="stretch" spacing={layout.contentStack}>
            <Box
              borderRadius="20px"
              overflow="hidden"
              bg={colors.gradient.brand}
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
              bg={colors.gradient.brandVertical}
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
                            variant="gold"
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
              {...glassCard}
            >
              <Text fontSize="lg" fontWeight="700" color="brand.500" mb={4}>
                Admission Procedure Details
              </Text>
              <VStack align="stretch" spacing={4}>
                <Text fontSize="sm" color="text.secondary" lineHeight="1.85">
                  Admission to all programs is granted as per the norms prescribed by Bhakta Kavi Narsinh Mehta University and the State Government of Gujarat. Candidates must submit the application form along with all required documents within the stipulated admission period.
                </Text>
                <Text fontSize="sm" color="text.secondary" lineHeight="1.85">
                  An application fee of{" "}
                  <Text as="span" fontWeight="700" color="brand.500">
                    Rs. 100/-
                  </Text>{" "}
                  is payable in cash at the time of submission of the admission form.
                </Text>
              </VStack>
            </Box>

            <Box
              p={{ base: 6, md: 8 }}
              {...glassCard}
            >
              <Text fontSize="lg" fontWeight="700" color="brand.500" mb={5}>
                Required Documents
              </Text>
              <List spacing={3}>
                {ADMISSION_DOCUMENTS.map((doc) => (
                  <ListItem key={doc} display="flex" alignItems="flex-start">
                    <ListIcon as={() => <CheckIcon />} mt={0.5} />
                    <Text fontSize="sm" color="text.secondary" lineHeight="1.7">
                      {doc}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
      </VStack>
    </PageContent>
  </PageLayout>
);

export default AdmissionPage;
