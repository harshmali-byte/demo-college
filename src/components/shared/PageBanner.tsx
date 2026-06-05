import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type PageBannerProps = {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
};

const PageBanner = ({ title, breadcrumbs, bgImage }: PageBannerProps) => (
  <Box position="relative" overflow="hidden" py={{ base: 14, md: 20 }}>
    <Box
      position="absolute"
      inset={0}
      bgImage={bgImage ? `url(${bgImage})` : undefined}
      bgSize="cover"
      bgPosition="center"
    />
    <Box
      position="absolute"
      inset={0}
      bg="linear-gradient(135deg, rgba(11, 31, 77, 0.92) 0%, rgba(19, 43, 103, 0.88) 55%, rgba(26, 58, 122, 0.85) 100%)"
    />
    <Box
      position="absolute"
      inset={0}
      bgImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
      bgSize="28px 28px"
      opacity={0.5}
    />
    <Box
      position="absolute"
      top="-30%"
      right="-5%"
      w="500px"
      h="500px"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(0, 212, 255, 0.25) 0%, transparent 70%)"
      filter="blur(60px)"
      pointerEvents="none"
    />
    <Box
      position="absolute"
      bottom="-40%"
      left="-10%"
      w="400px"
      h="400px"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(0, 191, 165, 0.2) 0%, transparent 70%)"
      filter="blur(70px)"
      pointerEvents="none"
    />

    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={1}>
      <Text
        as="h1"
        fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
        fontWeight="800"
        color="white"
        letterSpacing="-0.03em"
        lineHeight="1.1"
        mb={4}
      >
        {title}
      </Text>
      <HStack spacing={2} fontSize="sm" fontWeight="500">
        {breadcrumbs.map((crumb, index) => (
          <HStack key={crumb.label} spacing={2}>
            {index > 0 && <Text color="rgba(255,255,255,0.4)">/</Text>}
            {crumb.href ? (
              <Text
                as={RouterLink}
                to={crumb.href}
                color={index === breadcrumbs.length - 1 ? "#00D4FF" : "rgba(255,255,255,0.75)"}
                _hover={{ color: "#00D4FF", textDecoration: "none" }}
              >
                {crumb.label}
              </Text>
            ) : (
              <Text color="#00D4FF">{crumb.label}</Text>
            )}
          </HStack>
        ))}
      </HStack>
    </Container>
  </Box>
);

export default PageBanner;
