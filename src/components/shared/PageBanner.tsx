import { useEffect, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import type { BannerSlide } from "../../data/bannerContent";
import { layout } from "../../theme/tokens";
import PageContainer from "./PageContainer";

const SLIDE_INTERVAL_MS = 5500;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

type PageBannerProps = {
  slides: BannerSlide[];
  breadcrumbs: { label: string; href?: string }[];
};

const PageBanner = ({ slides, breadcrumbs }: PageBannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      minH={{ base: "380px", md: "440px", lg: "480px" }}
      py={layout.bannerPy}
    >
      {slides.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Box
            key={`${item.title}-${index}`}
            position="absolute"
            inset={0}
            bgImage={`url(${item.image})`}
            bgSize="cover"
            bgPosition="center"
            opacity={isActive ? 1 : 0}
            transform={isActive ? "scale(1.04)" : "scale(1)"}
            transition="opacity 1.2s ease-in-out, transform 5.5s ease-out"
            willChange="opacity, transform"
            aria-hidden={!isActive}
          />
        );
      })}

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(105deg, rgba(5, 29, 59, 0.9) 0%, rgba(11, 31, 77, 0.78) 45%, rgba(11, 31, 77, 0.5) 100%)"
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
        top="-20%"
        right="-5%"
        w={{ base: "240px", md: "400px" }}
        h={{ base: "240px", md: "400px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="-8%"
        w={{ base: "200px", md: "320px" }}
        h={{ base: "200px", md: "320px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0, 191, 165, 0.16) 0%, transparent 70%)"
        filter="blur(70px)"
        pointerEvents="none"
      />

      <PageContainer
        position="relative"
        zIndex={1}
        h="full"
        minH={{ base: "300px", md: "360px" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap={{ base: 6, md: 8 }}
      >
        <VStack
          key={activeIndex}
          align="flex-start"
          spacing={{ base: 3, md: 4 }}
          maxW={{ base: "100%", md: "720px", lg: "760px" }}
          animation={`${fadeUp} 0.6s ease-out`}
          flex="1"
          justify="center"
        >
          {slide.badge && (
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
          )}

          <Text
            as="h1"
            fontSize={{ base: "2.25rem", md: "3rem", lg: "3.5rem" }}
            fontWeight="800"
            color="white"
            letterSpacing="-0.03em"
            lineHeight="1.1"
          >
            {slide.title}
          </Text>

          {slide.subtitle && (
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600" color="accent.gold" lineHeight="1.4">
              {slide.subtitle}
            </Text>
          )}

          {slide.tagline && (
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="rgba(255,255,255,0.78)"
              lineHeight="1.8"
              maxW="600px"
            >
              {slide.tagline}
            </Text>
          )}
        </VStack>

        <Box>
          <HStack spacing={2} fontSize="sm" fontWeight="500" mb={slides.length > 1 ? 4 : 0} flexWrap="wrap">
            {breadcrumbs.map((crumb, index) => (
              <HStack key={crumb.label} spacing={2}>
                {index > 0 && <Text color="rgba(255,255,255,0.4)">/</Text>}
                {crumb.href ? (
                  <Text
                    as={RouterLink}
                    to={crumb.href}
                    color={index === breadcrumbs.length - 1 ? "accent.cyan" : "rgba(255,255,255,0.75)"}
                    _hover={{ color: "accent.cyan", textDecoration: "none" }}
                  >
                    {crumb.label}
                  </Text>
                ) : (
                  <Text color="accent.cyan">{crumb.label}</Text>
                )}
              </HStack>
            ))}
          </HStack>

          {slides.length > 1 && (
            <HStack spacing={2.5}>
              {slides.map((item, index) => (
                <Box
                  key={`${item.title}-dot-${index}`}
                  as="button"
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  w={index === activeIndex ? "32px" : "8px"}
                  h="8px"
                  borderRadius="full"
                  bg={index === activeIndex ? "accent.gold" : "rgba(255,255,255,0.35)"}
                  transition="all 0.35s ease"
                  _hover={{ bg: index === activeIndex ? "accent.goldHover" : "rgba(255,255,255,0.55)" }}
                />
              ))}
            </HStack>
          )}
        </Box>
      </PageContainer>
    </Box>
  );
};

export default PageBanner;
