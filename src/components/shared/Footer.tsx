import type { ReactNode } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Link,
  VStack,
  HStack,
  Flex,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  COLLEGE,
  CONTACT,
  SITEMAP_LINKS_LEFT,
  SITEMAP_LINKS_RIGHT,
  SUPPORT_LINKS,
  SOCIAL_LINKS,
} from "../../data/siteContent";
import SocialIcon from "./SocialIcon";

const ACCENT = "#FFB300";

const ChevronBullet = () => (
  <Text as="span" color={ACCENT} fontSize="xs" fontWeight="700" mr={2} flexShrink={0}>
    ›
  </Text>
);

const FooterLink = ({ label, href }: { label: string; href: string }) => {
  const style = {
    fontSize: "sm",
    color: "rgba(255,255,255,0.85)",
    _hover: { color: ACCENT, textDecoration: "none" },
    transition: "color 0.2s ease",
    display: "flex",
    alignItems: "center",
    py: 1.5,
  };

  if (href.startsWith("/#")) {
    return (
      <Link href={href} {...style}>
        <ChevronBullet />
        {label}
      </Link>
    );
  }

  return (
    <Link as={RouterLink} to={href} {...style}>
      <ChevronBullet />
      {label}
    </Link>
  );
};

const ContactItem = ({
  icon,
  children,
  href,
}: {
  icon: "home" | "phone" | "email" | "location";
  children: ReactNode;
  href?: string;
}) => {
  const icons = {
    home: (
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
    email: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    location: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  };

  const content = (
    <HStack align="flex-start" spacing={3}>
      <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" flexShrink={0} mt={1}>
        {icons[icon]}
      </Box>
      <Text fontSize="sm" color="rgba(255,255,255,0.85)" lineHeight="1.7">
        {children}
      </Text>
    </HStack>
  );

  if (href) {
    return (
      <Link href={href} _hover={{ textDecoration: "none" }} display="block">
        {content}
      </Link>
    );
  }

  return content;
};

const Footer = () => (
  <Box
    as="footer"
    id="contact"
    bg="#051d3b"
    color="white"
    position="relative"
    overflow="hidden"
    borderTop="1px solid rgba(255,255,255,0.06)"
  >
    <Box
      position="absolute"
      top="-20%"
      right="-10%"
      w="400px"
      h="400px"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)"
      filter="blur(60px)"
      pointerEvents="none"
    />

    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 12, md: 16 }}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "1.4fr 1fr 1fr 1.2fr" }}
        gap={{ base: 10, md: 12, lg: 10 }}
      >
        <GridItem>
          <HStack spacing={4} mb={6} align="center">
            <Flex
              w="56px"
              h="56px"
              borderRadius="full"
              bg="rgba(255,255,255,0.08)"
              border="2px solid rgba(255,255,255,0.15)"
              align="center"
              justify="center"
              flexShrink={0}
            >
              <Text fontSize="2xs" fontWeight="800" color="white" textAlign="center" lineHeight="1.2">
                JK
              </Text>
            </Flex>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="800"
              letterSpacing="0.04em"
              textTransform="uppercase"
            >
              {COLLEGE.brandTitle}
            </Text>
          </HStack>

          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight="1.8" maxW="360px" mb={6}>
            {COLLEGE.about}
          </Text>

          <SimpleGrid columns={3} spacing={3} maxW="200px">
            {SOCIAL_LINKS.map((social) => (
              <IconButton
                key={social.icon}
                aria-label={social.label}
                icon={<SocialIcon icon={social.icon} size="14px" />}
                size="sm"
                w="36px"
                h="36px"
                minW="36px"
                variant="ghost"
                color="white"
                borderRadius="full"
                bg="rgba(255,255,255,0.1)"
                border="1px solid rgba(255,255,255,0.12)"
                _hover={{ bg: "rgba(255, 179, 0, 0.2)", borderColor: ACCENT, color: ACCENT }}
              />
            ))}
          </SimpleGrid>
        </GridItem>

        <GridItem>
          <Text fontSize="md" fontWeight="700" mb={5} color="white">
            Sitemap
          </Text>
          <SimpleGrid columns={2} spacingX={4}>
            <VStack align="flex-start" spacing={0}>
              {SITEMAP_LINKS_LEFT.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </VStack>
            <VStack align="flex-start" spacing={0}>
              {SITEMAP_LINKS_RIGHT.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </VStack>
          </SimpleGrid>
        </GridItem>

        <GridItem>
          <Text fontSize="md" fontWeight="700" mb={5} color="white">
            Support
          </Text>
          <VStack align="flex-start" spacing={0}>
            {SUPPORT_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                fontSize="sm"
                color="rgba(255,255,255,0.85)"
                _hover={{ color: ACCENT, textDecoration: "none" }}
                transition="color 0.2s ease"
                display="flex"
                alignItems="center"
                py={1.5}
              >
                <ChevronBullet />
                {link}
              </Link>
            ))}
          </VStack>
        </GridItem>

        <GridItem>
          <Text fontSize="md" fontWeight="700" mb={5} color="white">
            Contact Us
          </Text>
          <VStack align="flex-start" spacing={4}>
            <ContactItem icon="home">{CONTACT.address}</ContactItem>
            <ContactItem icon="phone" href={`tel:${CONTACT.phones[0]}`}>
              {CONTACT.phones[0]}
            </ContactItem>
            <ContactItem icon="phone" href={`tel:${CONTACT.phones[1]}`}>
              {CONTACT.phones[1]}
            </ContactItem>
            <ContactItem icon="email" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </ContactItem>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <ContactItem icon="location">How to Reach us?</ContactItem>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
    </Container>

    <Box bg="#031428" borderTop="1px solid rgba(255,255,255,0.06)">
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} py={4}>
        <Flex justify="space-between" align="center" gap={4}>
          <Text fontSize="sm" color="rgba(255,255,255,0.85)">
            {COLLEGE.copyrightText}
          </Text>
          <IconButton
            aria-label="Back to top"
            icon={
              <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15" />
              </Box>
            }
            size="sm"
            w="36px"
            h="36px"
            minW="36px"
            borderRadius="md"
            bg={ACCENT}
            color="white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            _hover={{ bg: "#FF8F00", transform: "translateY(-2px)" }}
            transition="all 0.2s ease"
          />
        </Flex>
      </Container>
    </Box>
  </Box>
);

export default Footer;
