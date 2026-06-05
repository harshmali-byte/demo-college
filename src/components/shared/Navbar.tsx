import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Link,
  Container,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { COLLEGE, CONTACT, NAV_LINKS } from "../../data/siteContent";

const Logo = () => (
  <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
    <HStack spacing={3}>
      <Flex
        w={{ base: "44px", md: "52px" }}
        h={{ base: "44px", md: "52px" }}
        borderRadius="14px"
        bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
        align="center"
        justify="center"
        boxShadow="0 4px 20px rgba(11, 31, 77, 0.3)"
        border="2px solid rgba(0, 212, 255, 0.2)"
      >
        <Text fontSize="xs" fontWeight="800" color="white" letterSpacing="tight">
          JK
        </Text>
      </Flex>
      <VStack align="flex-start" spacing={0} display={{ base: "none", lg: "flex" }}>
        <Text fontSize="xs" fontWeight="700" color="#0B1F4D" lineHeight="1.3" maxW="220px">
          {COLLEGE.name}
        </Text>
        <Text fontSize="xs" fontWeight="600" color="#132B67" opacity={0.8}>
          - {COLLEGE.location}
        </Text>
      </VStack>
    </HStack>
  </Link>
);

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/" && false;
  return pathname === href;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = (href: string) => {
    const active = isActive(pathname, href);
    return {
      px: 4,
      py: 3,
      fontSize: "sm",
      fontWeight: active ? "700" : "500",
      color: active ? "#0B1F4D" : "#0F172A",
      borderBottom: "2px solid",
      borderColor: active ? "#00D4FF" : "transparent",
      whiteSpace: "nowrap" as const,
      _hover: { color: "#0B1F4D", textDecoration: "none", borderColor: "#00D4FF" },
      transition: "all 0.2s ease",
    };
  };

  return (
    <>
      <Box
        bg="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(14px)"
        borderBottom="1px solid"
        borderColor="rgba(11, 31, 77, 0.06)"
        sx={{ WebkitBackdropFilter: "blur(14px)" }}
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 3, md: 4 }}>
          <Flex align="center" justify="space-between" gap={4} flexWrap="wrap">
            <Logo />

            <HStack spacing={4} display={{ base: "none", xl: "flex" }}>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>
                <HStack
                  spacing={3}
                  px={4}
                  py={2}
                  borderRadius="xl"
                  bg="rgba(11, 31, 77, 0.04)"
                  border="1px solid rgba(11, 31, 77, 0.08)"
                >
                  <Flex
                    w="36px"
                    h="36px"
                    borderRadius="full"
                    bg="linear-gradient(135deg, #00D4FF, #00BFA5)"
                    align="center"
                    justify="center"
                  >
                    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </Box>
                  </Flex>
                  <VStack align="flex-start" spacing={0}>
                    <Text fontSize="2xs" fontWeight="600" color="#64748B" textTransform="uppercase" letterSpacing="wider">
                      Contact Us
                    </Text>
                    <Text fontSize="sm" fontWeight="700" color="#0B1F4D">
                      {CONTACT.primaryPhone}
                    </Text>
                  </VStack>
                </HStack>
              </Link>

              <Button
                size="sm"
                fontWeight="700"
                borderRadius="xl"
                bg="linear-gradient(135deg, #1E88E5, #1565C0)"
                color="white"
                px={5}
                boxShadow="0 4px 16px rgba(30, 136, 229, 0.3)"
                _hover={{ transform: "translateY(-1px)" }}
              >
                eGyan
              </Button>
              <Button
                size="sm"
                fontWeight="700"
                borderRadius="xl"
                bg="linear-gradient(135deg, #FFB300, #FF8F00)"
                color="#0B1F4D"
                px={5}
                boxShadow="0 4px 16px rgba(255, 179, 0, 0.3)"
                _hover={{ transform: "translateY(-1px)" }}
              >
                eGuru
              </Button>
            </HStack>

            <IconButton
              aria-label="Open menu"
              display={{ base: "flex", lg: "none" }}
              variant="ghost"
              onClick={onOpen}
              icon={
                <Box as="svg" w="22px" h="22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </Box>
              }
            />
          </Flex>
        </Container>
      </Box>

      <Box
        as="nav"
        position="sticky"
        top={0}
        zIndex={1000}
        bg="rgba(255, 255, 255, 0.72)"
        backdropFilter="blur(14px)"
        borderBottom="1px solid"
        borderColor={scrolled ? "rgba(11, 31, 77, 0.1)" : "rgba(255, 255, 255, 0.4)"}
        boxShadow={scrolled ? "0 8px 32px rgba(11, 31, 77, 0.08)" : "none"}
        transition="all 0.3s ease"
        sx={{ WebkitBackdropFilter: "blur(14px)" }}
        aria-label="Main navigation"
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <HStack
            spacing={0}
            justify="center"
            display={{ base: "none", lg: "flex" }}
            overflowX="auto"
            py={1}
          >
            {NAV_LINKS.map((item) =>
              item.href.startsWith("/#") ? (
                <Link key={item.label} href={item.href} {...navLinkStyle(item.href)}>
                  {item.label}
                </Link>
              ) : (
                <Link key={item.label} as={RouterLink} to={item.href} {...navLinkStyle(item.href)}>
                  {item.label}
                </Link>
              )
            )}
          </HStack>
        </Container>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody py={6}>
            <VStack align="stretch" spacing={1}>
              {NAV_LINKS.map((item) =>
                item.href.startsWith("/#") ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    py={3}
                    px={2}
                    fontWeight="500"
                    borderRadius="lg"
                    onClick={onClose}
                    _hover={{ bg: "rgba(11, 31, 77, 0.04)", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    as={RouterLink}
                    to={item.href}
                    py={3}
                    px={2}
                    fontWeight="500"
                    borderRadius="lg"
                    onClick={onClose}
                    _hover={{ bg: "rgba(11, 31, 77, 0.04)", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </VStack>
            <VStack mt={8} spacing={3} align="stretch">
              <Button bg="linear-gradient(135deg, #1E88E5, #1565C0)" color="white" borderRadius="xl">
                eGyan
              </Button>
              <Button bg="linear-gradient(135deg, #FFB300, #FF8F00)" color="#0B1F4D" borderRadius="xl">
                eGuru
              </Button>
              <Text fontSize="sm" fontWeight="700" color="#0B1F4D" textAlign="center" pt={2}>
                {CONTACT.primaryPhone}
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
