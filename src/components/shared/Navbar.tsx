import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { CONTACT, NAV_MENU, type NavMenuItem } from "../../data/siteContent";
import { colors } from "../../theme/tokens";
import KJLogo from "./KJLogo";
import PageContainer from "./PageContainer";

const Logo = () => (
  <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }} flexShrink={0}>
    <KJLogo size={{ base: "40px", md: "48px" }} />
  </Link>
);

const pathMatches = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  const base = href.split("#")[0];
  if (href.includes("#")) return pathname === base;
  if (href === "/departments") return pathname.startsWith("/departments");
  return pathname === href || pathname.startsWith(`${href}/`);
};

const isNavItemActive = (pathname: string, item: NavMenuItem) => {
  if (pathMatches(pathname, item.href)) return true;
  return item.children?.some((child) => pathMatches(pathname, child.href)) ?? false;
};

const SubmenuPanel = ({
  items,
  onNavigate,
  wide,
}: {
  items: NavMenuItem["children"];
  onNavigate?: () => void;
  wide?: boolean;
}) => {
  if (!items?.length) return null;

  return (
    <Box
      bg="brand.500"
      minW={wide ? "268px" : "220px"}
      w="max-content"
      boxShadow="0 14px 44px rgba(11, 31, 77, 0.4)"
    >
      {items.map((child, index) => (
        <Box key={child.label}>
          {child.href.startsWith("/#") ? (
            <Link
              href={child.href}
              display="block"
              px={5}
              py={3}
              fontSize="11px"
              fontWeight="800"
              color="white"
              textTransform="uppercase"
              letterSpacing="0.05em"
              lineHeight="1.35"
              whiteSpace="nowrap"
              _hover={{ bg: "rgba(255,255,255,0.1)", color: "accent.gold", textDecoration: "none" }}
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          ) : (
            <Link
              as={RouterLink}
              to={child.href}
              display="block"
              px={5}
              py={3}
              fontSize="11px"
              fontWeight="800"
              color="white"
              textTransform="uppercase"
              letterSpacing="0.05em"
              lineHeight="1.35"
              whiteSpace="nowrap"
              _hover={{ bg: "rgba(255,255,255,0.1)", color: "accent.gold", textDecoration: "none" }}
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          )}
          {index < items.length - 1 && <Box h="1px" bg="accent.gold" />}
        </Box>
      ))}
    </Box>
  );
};

const DesktopNavItem = ({
  item,
  pathname,
  openMenu,
  setOpenMenu,
}: {
  item: NavMenuItem;
  pathname: string;
  openMenu: string | null;
  setOpenMenu: (label: string | null) => void;
}) => {
  const hasChildren = Boolean(item.children?.length);
  const isOpen = openMenu === item.label;
  const isCurrent = isNavItemActive(pathname, item);
  const highlight = isOpen || (isCurrent && openMenu === null);

  const label = (
    <Text
      as="span"
      fontSize={{ lg: "10px", xl: "11px" }}
      fontWeight="800"
      letterSpacing="0.08em"
      textTransform="uppercase"
      color={highlight ? "accent.gold" : "brand.500"}
      transition="color 0.2s ease"
      whiteSpace="nowrap"
    >
      {item.label}
    </Text>
  );

  const trigger = item.href.startsWith("/#") ? (
    <Link href={item.href} display="block" px={{ lg: 2.5, xl: 3.5 }} py={2.5} _hover={{ textDecoration: "none" }}>
      {label}
    </Link>
  ) : (
    <Link as={RouterLink} to={item.href} display="block" px={{ lg: 2.5, xl: 3.5 }} py={2.5} _hover={{ textDecoration: "none" }}>
      {label}
    </Link>
  );

  if (!hasChildren) {
    return <Box flexShrink={0}>{trigger}</Box>;
  }

  const wideMenu = item.label === "Courses";

  return (
    <Box
      position="relative"
      flexShrink={0}
      onMouseEnter={() => setOpenMenu(item.label)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      {trigger}
      {isOpen && (
        <Box position="absolute" top="100%" left={0} pt={1} zIndex={1200}>
          <SubmenuPanel items={item.children} wide={wideMenu} />
        </Box>
      )}
    </Box>
  );
};

const MobileNavItem = ({
  item,
  pathname,
  onClose,
}: {
  item: NavMenuItem;
  pathname: string;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  const active = isNavItemActive(pathname, item);

  const parent = item.href.startsWith("/#") ? (
    <Link
      href={item.href}
      py={3}
      px={2}
      fontWeight="700"
      fontSize="sm"
      color={active ? "accent.gold" : "brand.500"}
      borderRadius="lg"
      onClick={onClose}
      _hover={{ bg: colors.surface.muted, textDecoration: "none" }}
    >
      {item.label}
    </Link>
  ) : (
    <Link
      as={RouterLink}
      to={item.href}
      py={3}
      px={2}
      fontWeight="700"
      fontSize="sm"
      color={active ? "accent.gold" : "brand.500"}
      borderRadius="lg"
      onClick={onClose}
      _hover={{ bg: colors.surface.muted, textDecoration: "none" }}
    >
      {item.label}
    </Link>
  );

  if (!hasChildren) return parent;

  return (
    <Box>
      <Flex
        align="center"
        justify="space-between"
        py={3}
        px={2}
        borderRadius="lg"
        cursor="pointer"
        color={active ? "accent.gold" : "brand.500"}
        fontWeight="700"
        fontSize="sm"
        _hover={{ bg: colors.surface.muted }}
        onClick={() => setExpanded((v) => !v)}
      >
        <Text>{item.label}</Text>
        <Text fontSize="xs">{expanded ? "−" : "+"}</Text>
      </Flex>
      <Collapse in={expanded}>
        <Box bg="brand.500" borderRadius="lg" overflow="hidden" mb={2}>
          {item.children!.map((child, index) => (
            <Box key={child.label}>
              {child.href.startsWith("/#") ? (
                <Link
                  href={child.href}
                  display="block"
                  px={4}
                  py={2.5}
                  fontSize="2xs"
                  fontWeight="800"
                  color="white"
                  textTransform="uppercase"
                  letterSpacing="0.04em"
                  onClick={onClose}
                  _hover={{ bg: "rgba(255,255,255,0.08)", color: "accent.gold", textDecoration: "none" }}
                >
                  {child.label}
                </Link>
              ) : (
                <Link
                  as={RouterLink}
                  to={child.href}
                  display="block"
                  px={4}
                  py={2.5}
                  fontSize="2xs"
                  fontWeight="800"
                  color="white"
                  textTransform="uppercase"
                  letterSpacing="0.04em"
                  onClick={onClose}
                  _hover={{ bg: "rgba(255,255,255,0.08)", color: "accent.gold", textDecoration: "none" }}
                >
                  {child.label}
                </Link>
              )}
              {index < item.children!.length - 1 && <Box h="1px" bg="accent.gold" />}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={1100}
        bg="white"
        borderBottom="1px solid"
        borderColor={scrolled ? colors.border.medium : colors.border.light}
        boxShadow={scrolled ? "0 8px 32px rgba(11, 31, 77, 0.08)" : "none"}
        transition="all 0.3s ease"
        overflow="visible"
      >
        <PageContainer py={{ base: 2.5, md: 3 }} overflow="visible">
          <Flex align="center" gap={{ base: 3, md: 4 }} minH={{ base: "52px", md: "56px" }} overflow="visible">
            <Logo />

            <Flex
              as="nav"
              aria-label="Main navigation"
              flex="1"
              justify="center"
              align="center"
              display={{ base: "none", lg: "flex" }}
              overflow="visible"
              gap={0}
            >
              {NAV_MENU.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                />
              ))}
            </Flex>

            <HStack spacing={{ base: 2, xl: 3 }} flexShrink={0} display={{ base: "none", lg: "flex" }}>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>
                <HStack
                  spacing={2}
                  px={{ lg: 2.5, xl: 3 }}
                  py={1.5}
                  borderRadius="xl"
                  bg={colors.surface.muted}
                  border={`1px solid ${colors.border.light}`}
                >
                  <Flex
                    w="32px"
                    h="32px"
                    borderRadius="full"
                    bg={colors.gradient.accent}
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </Box>
                  </Flex>
                  <VStack align="flex-start" spacing={0} display={{ base: "none", xl: "flex" }}>
                    <Text fontSize="2xs" fontWeight="600" color="text.muted" textTransform="uppercase" letterSpacing="wider">
                      Contact Us
                    </Text>
                    <Text fontSize="sm" fontWeight="700" color="brand.500">
                      {CONTACT.primaryPhone}
                    </Text>
                  </VStack>
                </HStack>
              </Link>

              <Button size="sm" variant="accent" px={{ lg: 4, xl: 5 }} fontSize="xs">
                eGyan
              </Button>
              <Button size="sm" variant="gold" px={{ lg: 4, xl: 5 }} fontSize="xs">
                eGuru
              </Button>
            </HStack>

            <IconButton
              aria-label="Open menu"
              display={{ base: "flex", lg: "none" }}
              variant="ghost"
              ml="auto"
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
        </PageContainer>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody py={6}>
            <VStack align="stretch" spacing={0}>
              {NAV_MENU.map((item) => (
                <MobileNavItem key={item.label} item={item} pathname={pathname} onClose={onClose} />
              ))}
            </VStack>
            <VStack mt={8} spacing={3} align="stretch">
              <Button variant="accent" borderRadius="xl">
                eGyan
              </Button>
              <Button variant="gold" borderRadius="xl">
                eGuru
              </Button>
              <Text fontSize="sm" fontWeight="700" color="brand.500" textAlign="center" pt={2}>
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
