import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { HERO_QUICK_ACTIONS, HERO_SLIDES } from "../../data/homeContent";
import PageContainer from "../shared/PageContainer";

const SLIDE_INTERVAL_MS = 6000;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "560px", md: "640px", lg: "720px" }}
      overflow="hidden"
    >
      {HERO_SLIDES.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Box
            key={item.title}
            position="absolute"
            inset={0}
            bgImage={`url(${item.image})`}
            bgSize="cover"
            bgPosition="center"
            opacity={isActive ? 1 : 0}
            transform={isActive ? "scale(1.04)" : "scale(1)"}
            transition="opacity 1.4s ease-in-out, transform 6s ease-out"
            willChange="opacity, transform"
            aria-hidden={!isActive}
          />
        );
      })}

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(105deg, rgba(5, 29, 59, 0.92) 0%, rgba(11, 31, 77, 0.78) 42%, rgba(11, 31, 77, 0.45) 100%)"
      />
      <Box
        position="absolute"
        inset={0}
        bgImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)"
        bgSize="28px 28px"
        opacity={0.35}
      />
      <Box
        position="absolute"
        top="8%"
        right="6%"
        w={{ base: "180px", md: "280px" }}
        h={{ base: "180px", md: "280px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0,212,255,0.14) 0%, transparent 70%)"
        filter="blur(50px)"
        pointerEvents="none"
      />

      <PageContainer
        position="relative"
        zIndex={1}
        pt={{ base: 12, md: 16, lg: 18 }}
        pb={{ base: 16, md: 20, lg: 24 }}
        h="full"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap={{ base: 6, md: 8 }}
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 3, md: 4 }} maxW="920px">
          {HERO_QUICK_ACTIONS.map((action) => (
            <Button
              key={action.label}
              as={RouterLink}
              to={action.href}
              size="sm"
              variant="gold"
              fontSize="xs"
              px={{ base: 3, md: 4 }}
              h={{ base: "38px", md: "42px" }}
              _hover={{ transform: "translateY(-2px)" }}
            >
              {action.label}
            </Button>
          ))}
        </SimpleGrid>

        <Flex
          align="center"
          flex="1"
          py={{ base: 6, md: 8 }}
          minH={{ base: "320px", md: "380px", lg: "400px" }}
        >
          <VStack
            key={activeIndex}
            align="flex-start"
            spacing={{ base: 5, md: 6, lg: 7 }}
            maxW={{ base: "100%", md: "720px", lg: "760px" }}
            animation={`${fadeUp} 0.7s ease-out`}
          >
            <Box
              px={4}
              py={1.5}
              borderRadius="full"
              bg="rgba(255,179,0,0.18)"
              border="1px solid rgba(255,179,0,0.45)"
            >
              <Text
                fontSize="xs"
                fontWeight="700"
                color="accent.gold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                {slide.badge}
              </Text>
            </Box>

            <Text
              as="h1"
              fontSize={{ base: "2.25rem", md: "3.25rem", lg: "4rem" }}
              fontWeight="800"
              color="white"
              lineHeight="1.08"
              letterSpacing="-0.03em"
            >
              {slide.title}
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600" color="accent.gold">
              {slide.subtitle}
            </Text>

            <Text fontSize="sm" fontWeight="500" color="rgba(255,255,255,0.88)" lineHeight="1.7">
              {slide.affiliation}
            </Text>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="rgba(255,255,255,0.78)"
              lineHeight="1.85"
              maxW="600px"
            >
              {slide.description}
            </Text>

            <HStack spacing={4} flexWrap="wrap" pt={{ base: 1, md: 2 }}>
              <Button
                as={RouterLink}
                to={slide.primaryCta.href}
                size="lg"
                variant="gold"
                px={8}
                _hover={{ transform: "translateY(-2px)" }}
              >
                {slide.primaryCta.label}
              </Button>
              <Button
                as={RouterLink}
                to={slide.secondaryCta.href}
                size="lg"
                variant="outline"
                borderWidth="2px"
                borderColor="rgba(255,255,255,0.55)"
                bg="rgba(255,255,255,0.08)"
                color="white"
                px={8}
                _hover={{ bg: "rgba(255,255,255,0.16)", borderColor: "accent.cyan", color: "white" }}
              >
                {slide.secondaryCta.label}
              </Button>
            </HStack>
          </VStack>
        </Flex>

        <HStack spacing={2.5} pt={{ base: 2, md: 4 }}>
          {HERO_SLIDES.map((item, index) => (
            <Box
              key={item.title}
              as="button"
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              w={index === activeIndex ? "36px" : "10px"}
              h="10px"
              borderRadius="full"
              bg={index === activeIndex ? "accent.gold" : "rgba(255,255,255,0.35)"}
              transition="all 0.35s ease"
              _hover={{ bg: index === activeIndex ? "accent.goldHover" : "rgba(255,255,255,0.55)" }}
            />
          ))}
        </HStack>
      </PageContainer>
    </Box>
  );
};

export default HomeHero;
