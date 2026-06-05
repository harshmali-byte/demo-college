import { Box, Flex, HStack, Link, Text, IconButton } from "@chakra-ui/react";
import { CONTACT, SOCIAL_LINKS } from "../../data/siteContent";
import { colors } from "../../theme/tokens";
import SocialIcon from "./SocialIcon";
import PageContainer from "./PageContainer";

const TopBar = () => (
  <Box
    bg={colors.gradient.brand}
    color="white"
    py={2}
    display={{ base: "none", md: "block" }}
  >
    <PageContainer>
      <Flex justify="space-between" align="center" gap={4}>
        <HStack spacing={6} fontSize="xs" fontWeight="500" opacity={0.9} flexWrap="wrap">
          <HStack spacing={2}>
            <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </Box>
            <Link href={`mailto:${CONTACT.email}`} _hover={{ color: "accent.cyan", textDecoration: "none" }}>
              {CONTACT.email}
            </Link>
          </HStack>
          <HStack spacing={2} maxW="420px">
            <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" flexShrink={0}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </Box>
            <Text noOfLines={1}>{CONTACT.addressShort}</Text>
          </HStack>
        </HStack>

        <HStack spacing={1}>
          {SOCIAL_LINKS.map((social) => (
            <IconButton
              key={social.icon}
              aria-label={social.label}
              icon={<SocialIcon icon={social.icon} />}
              size="xs"
              variant="ghost"
              color="white"
              borderRadius="lg"
              _hover={{ bg: "rgba(255,255,255,0.12)", color: "accent.cyan" }}
            />
          ))}
        </HStack>
      </Flex>
    </PageContainer>
  </Box>
);

export default TopBar;
