import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Grid,
  GridItem,
  IconButton,
  Link,
  Container,
} from "@chakra-ui/react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Admission", href: "#admission" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Placements", href: "#placements" },
  { label: "Contact", href: "#contact" },
];

const TECH_CARDS = [
  { label: "AI", color: "#00D4FF" },
  { label: "Cloud Computing", color: "#00BFA5" },
  { label: "Cyber Security", color: "#6366F1" },
  { label: "Data Science", color: "#00D4FF" },
];

const STATS = [
  { value: "15,000+", label: "Students" },
  { value: "120+", label: "Faculty Members" },
  { value: "98%", label: "Placement Support" },
  { value: "25+", label: "Years Excellence" },
];

const RECRUITERS = ["TCS", "Infosys", "Wipro", "HCL"];

const SearchIcon = () => (
  <Box as="svg" w="20px" h="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </Box>
);

const LogoPlaceholder = () => (
  <HStack spacing={3}>
    <Flex
      w={{ base: "40px", md: "48px" }}
      h={{ base: "40px", md: "48px" }}
      borderRadius="12px"
      bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
      align="center"
      justify="center"
      boxShadow="0 4px 20px rgba(11, 31, 77, 0.3)"
    >
      <Text fontSize="xs" fontWeight="800" color="white" letterSpacing="tight">
        JK
      </Text>
    </Flex>
    <VStack align="flex-start" spacing={0} display={{ base: "none", sm: "flex" }}>
      <Text fontSize="xs" fontWeight="700" color="#0B1F4D" lineHeight="1.2" letterSpacing="0.02em">
        College of Computer,
      </Text>
      <Text fontSize="xs" fontWeight="600" color="#132B67" lineHeight="1.2" opacity={0.85}>
        Science & IT
      </Text>
    </VStack>
  </HStack>
);

const BuildingIllustration = () => (
  <Box position="relative" w="100%" h="100%" minH="180px">
    <Box
      position="absolute"
      bottom="0"
      left="50%"
      transform="translateX(-50%)"
      w="85%"
      h="75%"
      borderRadius="16px 16px 4px 4px"
      bg="linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)"
      border="1px solid rgba(255,255,255,0.3)"
      overflow="hidden"
    >
      <Flex h="20%" bg="rgba(11, 31, 77, 0.6)" align="center" justify="center">
        <Text fontSize="2xs" fontWeight="700" color="white" letterSpacing="wider">
          CAMPUS
        </Text>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} p={3} h="80%">
        {Array.from({ length: 12 }).map((_, i) => (
          <Box
            key={i}
            borderRadius="4px"
            bg={i % 3 === 0 ? "rgba(0, 212, 255, 0.35)" : "rgba(255,255,255,0.15)"}
            border="1px solid rgba(255,255,255,0.2)"
          />
        ))}
      </Grid>
    </Box>
    <Box
      position="absolute"
      bottom="8%"
      left="8%"
      w="28%"
      h="35%"
      borderRadius="8px 8px 2px 2px"
      bg="linear-gradient(180deg, rgba(0, 191, 165, 0.4) 0%, rgba(0, 191, 165, 0.15) 100%)"
      border="1px solid rgba(0, 191, 165, 0.4)"
    />
    <Box
      position="absolute"
      bottom="12%"
      right="10%"
      w="22%"
      h="28%"
      borderRadius="50% 50% 4px 4px"
      bg="linear-gradient(180deg, rgba(0, 212, 255, 0.35) 0%, rgba(0, 212, 255, 0.1) 100%)"
      border="1px solid rgba(0, 212, 255, 0.35)"
    />
    <Box
      position="absolute"
      top="15%"
      left="20%"
      w="60%"
      h="8px"
      borderRadius="full"
      bg="rgba(255,255,255,0.1)"
    />
    <Box
      position="absolute"
      top="25%"
      right="15%"
      w="40px"
      h="40px"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)"
      filter="blur(8px)"
    />
  </Box>
);

const HeroSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box as="section" position="relative" overflow="hidden" bg="#F7FAFC" minH="100vh">
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgImage="radial-gradient(circle at 1px 1px, rgba(11, 31, 77, 0.06) 1px, transparent 0)"
        bgSize="32px 32px"
        opacity={0.7}
      />
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w={{ base: "300px", md: "500px", lg: "600px" }}
        h={{ base: "300px", md: "500px", lg: "600px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0, 212, 255, 0.18) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-15%"
        left="-8%"
        w={{ base: "280px", md: "450px" }}
        h={{ base: "280px", md: "450px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(11, 31, 77, 0.15) 0%, transparent 70%)"
        filter="blur(80px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="30%"
        left="5%"
        w="120px"
        h="120px"
        borderRadius="24px"
        bg="linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 191, 165, 0.05) 100%)"
        border="1px solid rgba(0, 212, 255, 0.12)"
        transform="rotate(12deg)"
        display={{ base: "none", lg: "block" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="55%"
        right="8%"
        w="80px"
        h="80px"
        borderRadius="full"
        border="1px solid rgba(0, 191, 165, 0.15)"
        bg="rgba(0, 191, 165, 0.04)"
        display={{ base: "none", md: "block" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="18%"
        right="25%"
        w="6px"
        h="6px"
        borderRadius="full"
        bg="#00D4FF"
        boxShadow="0 0 20px rgba(0, 212, 255, 0.6)"
        display={{ base: "none", lg: "block" }}
        pointerEvents="none"
      />

      <Box
        as="header"
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
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <Flex
            align="center"
            justify="space-between"
            py={{ base: 3, md: 4 }}
            gap={4}
          >
            <LogoPlaceholder />

            <HStack
              as="nav"
              spacing={{ base: 1, lg: 2 }}
              display={{ base: "none", lg: "flex" }}
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  px={3}
                  py={2}
                  fontSize="sm"
                  fontWeight="500"
                  color="#0F172A"
                  borderRadius="lg"
                  _hover={{
                    color: "#0B1F4D",
                    bg: "rgba(11, 31, 77, 0.04)",
                    textDecoration: "none",
                  }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "#00D4FF",
                    outlineOffset: "2px",
                  }}
                  transition="all 0.2s ease"
                >
                  {item.label}
                </Link>
              ))}
            </HStack>

            <HStack spacing={{ base: 2, md: 3 }}>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                size="sm"
                color="#0B1F4D"
                borderRadius="xl"
                _hover={{ bg: "rgba(11, 31, 77, 0.06)" }}
              />
              <Button
                variant="ghost"
                size={{ base: "sm", md: "md" }}
                fontWeight="600"
                color="#0B1F4D"
                borderRadius="xl"
                display={{ base: "none", sm: "inline-flex" }}
                _hover={{ bg: "rgba(11, 31, 77, 0.06)" }}
              >
                Student Login
              </Button>
              <Button
                size={{ base: "sm", md: "md" }}
                fontWeight="700"
                borderRadius="xl"
                bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
                color="white"
                px={{ base: 4, md: 6 }}
                boxShadow="0 4px 20px rgba(11, 31, 77, 0.25)"
                _hover={{
                  transform: "translateY(-1px)",
                  boxShadow: "0 8px 28px rgba(11, 31, 77, 0.35)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.25s ease"
              >
                Apply Now
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} pt={{ base: 10, md: 14, lg: 20 }} pb={{ base: 16, md: 20, lg: 24 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "55fr 45fr" }}
          gap={{ base: 12, md: 14, lg: 16 }}
          alignItems="center"
        >
          <GridItem>
            <VStack align="flex-start" spacing={{ base: 6, md: 8 }}>
              <Box
                px={5}
                py={2}
                borderRadius="full"
                bg="rgba(255, 255, 255, 0.6)"
                backdropFilter="blur(12px)"
                border="1px solid rgba(0, 212, 255, 0.3)"
                boxShadow="0 0 24px rgba(0, 212, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)"
                sx={{ WebkitBackdropFilter: "blur(12px)" }}
              >
                <HStack spacing={2}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#00D4FF" boxShadow="0 0 12px rgba(0, 212, 255, 0.8)" />
                  <Text fontSize="sm" fontWeight="600" color="#0B1F4D" letterSpacing="0.02em">
                    Admissions Open 2026-27
                  </Text>
                </HStack>
              </Box>

              <Text
                as="h1"
                fontSize={{ base: "2.5rem", sm: "3rem", md: "3.75rem", lg: "4.5rem", xl: "4.75rem" }}
                fontWeight="800"
                lineHeight={{ base: "1.15", md: "1.1" }}
                color="#0F172A"
                letterSpacing="-0.03em"
              >
                Empowering Modern
                <br />
                Minds with{" "}
                <Text
                  as="span"
                  bgGradient="linear(to-r, #00D4FF, #00BFA5)"
                  bgClip="text"
                  sx={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Tech
                </Text>{" "}
                &{" "}
                <Text
                  as="span"
                  bgGradient="linear(to-r, #00D4FF, #00BFA5)"
                  bgClip="text"
                  sx={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Innovation
                </Text>
              </Text>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="#475569"
                lineHeight="1.75"
                maxW="540px"
                fontWeight="400"
              >
                Shape your future at JK Institute with industry-aligned curriculum, cutting-edge labs,
                and a vibrant innovation ecosystem. From AI to cloud computing, we prepare you for
                tomorrow&apos;s careers with 98% placement support and partnerships with leading
                global recruiters.
              </Text>

              <HStack spacing={4} flexWrap="wrap" pt={2}>
                <Button
                  size="lg"
                  fontWeight="700"
                  borderRadius="2xl"
                  px={8}
                  h="56px"
                  bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
                  color="white"
                  boxShadow="0 8px 32px rgba(11, 31, 77, 0.3)"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(11, 31, 77, 0.4)",
                  }}
                  _active={{ transform: "translateY(0)" }}
                  transition="all 0.3s ease"
                >
                  Apply Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  fontWeight="600"
                  borderRadius="2xl"
                  px={8}
                  h="56px"
                  borderColor="rgba(11, 31, 77, 0.2)"
                  color="#0B1F4D"
                  bg="rgba(255, 255, 255, 0.5)"
                  backdropFilter="blur(8px)"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.8)",
                    borderColor: "#00D4FF",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Explore Courses
                </Button>
              </HStack>

              <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                gap={{ base: 3, md: 4 }}
                w="100%"
                pt={{ base: 4, md: 6 }}
              >
                {STATS.map((stat) => (
                  <Box
                    key={stat.label}
                    p={{ base: 4, md: 5 }}
                    borderRadius="2xl"
                    bg="rgba(255, 255, 255, 0.55)"
                    backdropFilter="blur(12px)"
                    border="1px solid rgba(255, 255, 255, 0.6)"
                    boxShadow="0 4px 24px rgba(11, 31, 77, 0.06)"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 32px rgba(11, 31, 77, 0.1)",
                    }}
                    transition="all 0.3s ease"
                    sx={{ WebkitBackdropFilter: "blur(12px)" }}
                  >
                    <Text
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="800"
                      bgGradient="linear(to-r, #0B1F4D, #132B67)"
                      bgClip="text"
                      sx={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {stat.value}
                    </Text>
                    <Text fontSize="xs" fontWeight="500" color="#64748B" mt={1}>
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </VStack>
          </GridItem>

          <GridItem position="relative">
            <Box
              position="relative"
              w="100%"
              minH={{ base: "420px", md: "500px", lg: "560px" }}
            >
              <Box
                position="absolute"
                inset="-8%"
                borderRadius="40px"
                bg="radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 65%)"
                filter="blur(40px)"
                pointerEvents="none"
              />

              <Box
                position="relative"
                w="100%"
                h="100%"
                minH={{ base: "420px", md: "500px", lg: "560px" }}
                borderRadius="32px"
                p={{ base: 5, md: 6 }}
                bg="linear-gradient(145deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 50%, rgba(0,212,255,0.08) 100%)"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255, 255, 255, 0.5)"
                boxShadow="0 24px 64px rgba(11, 31, 77, 0.12), 0 8px 24px rgba(0, 212, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)"
                sx={{ WebkitBackdropFilter: "blur(20px)" }}
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "32px",
                  padding: "1px",
                  background: "linear-gradient(135deg, rgba(0,212,255,0.4), rgba(0,191,165,0.2), rgba(11,31,77,0.1))",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                }}
              >
                <VStack spacing={4} h="100%" align="stretch">
                  <Box
                    flex={1}
                    borderRadius="20px"
                    bg="linear-gradient(180deg, rgba(11, 31, 77, 0.08) 0%, rgba(0, 212, 255, 0.06) 100%)"
                    border="1px solid rgba(255, 255, 255, 0.4)"
                    p={4}
                    position="relative"
                    overflow="hidden"
                  >
                    <BuildingIllustration />
                  </Box>

                  <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                    {TECH_CARDS.map((tech) => (
                      <Flex
                        key={tech.label}
                        align="center"
                        gap={2}
                        px={3}
                        py={2.5}
                        borderRadius="xl"
                        bg="rgba(255, 255, 255, 0.5)"
                        backdropFilter="blur(10px)"
                        border="1px solid rgba(255, 255, 255, 0.5)"
                        boxShadow="0 4px 16px rgba(11, 31, 77, 0.05)"
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: `0 8px 24px ${tech.color}22`,
                        }}
                        transition="all 0.25s ease"
                        sx={{ WebkitBackdropFilter: "blur(10px)" }}
                      >
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={tech.color}
                          boxShadow={`0 0 10px ${tech.color}`}
                          flexShrink={0}
                        />
                        <Text fontSize="xs" fontWeight="600" color="#0F172A" noOfLines={1}>
                          {tech.label}
                        </Text>
                      </Flex>
                    ))}
                  </Grid>
                </VStack>
              </Box>

              <Box
                position="absolute"
                top={{ base: "-4px", md: "8px" }}
                right={{ base: "-8px", md: "-24px" }}
                w={{ base: "160px", md: "190px" }}
                p={{ base: 3, md: 4 }}
                borderRadius="20px"
                bg="rgba(255, 255, 255, 0.75)"
                backdropFilter="blur(16px)"
                border="1px solid rgba(255, 255, 255, 0.6)"
                boxShadow="0 16px 48px rgba(11, 31, 77, 0.12)"
                zIndex={2}
                sx={{ WebkitBackdropFilter: "blur(16px)" }}
                _hover={{ transform: "translateY(-4px)" }}
                transition="transform 0.3s ease"
              >
                <Text fontSize="2xs" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="wider" mb={2}>
                  Top Recruiters
                </Text>
                <Flex flexWrap="wrap" gap={2}>
                  {RECRUITERS.map((company) => (
                    <Box
                      key={company}
                      px={2.5}
                      py={1}
                      borderRadius="lg"
                      bg="rgba(11, 31, 77, 0.06)"
                      border="1px solid rgba(11, 31, 77, 0.08)"
                    >
                      <Text fontSize="2xs" fontWeight="700" color="#0B1F4D">
                        {company}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>

              <Box
                position="absolute"
                bottom={{ base: "40px", md: "24px" }}
                left={{ base: "-8px", md: "-32px" }}
                w={{ base: "150px", md: "170px" }}
                p={{ base: 3, md: 4 }}
                borderRadius="20px"
                bg="linear-gradient(135deg, rgba(11, 31, 77, 0.9) 0%, rgba(19, 43, 103, 0.85) 100%)"
                backdropFilter="blur(16px)"
                border="1px solid rgba(0, 212, 255, 0.25)"
                boxShadow="0 16px 48px rgba(11, 31, 77, 0.25), 0 0 32px rgba(0, 212, 255, 0.1)"
                zIndex={2}
                sx={{ WebkitBackdropFilter: "blur(16px)" }}
                _hover={{ transform: "translateY(-4px)" }}
                transition="transform 0.3s ease"
              >
                <Text fontSize="2xs" fontWeight="600" color="rgba(255,255,255,0.7)" mb={1}>
                  Highest Package
                </Text>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="800"
                  bgGradient="linear(to-r, #00D4FF, #00BFA5)"
                  bgClip="text"
                  sx={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  24 LPA
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
