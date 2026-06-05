import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { HERO_QUICK_ACTIONS } from "../../data/homeContent";

const HomeHero = () => (
  <Box as="section" position="relative" minH={{ base: "520px", md: "600px", lg: "680px" }} overflow="hidden">
    <Box
      position="absolute"
      inset={0}
      bgImage="url(https://images.unsplash.com/photo-1530026405186-ed07f4a203ba?w=1600&q=80&auto=format&fit=crop)"
      bgSize="cover"
      bgPosition="center"
    />
    <Box
      position="absolute"
      inset={0}
      bg="linear-gradient(105deg, rgba(11,31,77,0.92) 0%, rgba(11,31,77,0.75) 45%, rgba(11,31,77,0.55) 100%)"
    />
    <Box
      position="absolute"
      inset={0}
      bgImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)"
      bgSize="28px 28px"
      opacity={0.5}
    />
    <Box
      position="absolute"
      top="10%"
      right="5%"
      w="300px"
      h="300px"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)"
      filter="blur(50px)"
      pointerEvents="none"
    />

    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={1} pt={{ base: 8, md: 12 }} pb={{ base: 12, md: 16 }}>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={3} mb={{ base: 8, md: 12 }} maxW="900px">
        {HERO_QUICK_ACTIONS.map((action) => (
          <Button
            key={action.label}
            as={RouterLink}
            to={action.href}
            size="sm"
            fontWeight="700"
            fontSize="xs"
            borderRadius="xl"
            bg="#FFB300"
            color="#0B1F4D"
            px={4}
            h="40px"
            boxShadow="0 4px 16px rgba(255,179,0,0.3)"
            _hover={{ bg: "#FF8F00", transform: "translateY(-2px)" }}
            transition="all 0.25s"
          >
            {action.label}
          </Button>
        ))}
      </SimpleGrid>

      <Flex align="center" minH={{ base: "320px", md: "380px" }}>
        <VStack align="flex-start" spacing={6} maxW="680px">
          <Box
            px={4}
            py={1.5}
            borderRadius="full"
            bg="rgba(255,179,0,0.2)"
            border="1px solid rgba(255,179,0,0.4)"
          >
            <Text fontSize="xs" fontWeight="700" color="#FFB300" letterSpacing="wider" textTransform="uppercase">
              Admissions Open 2026-27
            </Text>
          </Box>

          <Text
            as="h1"
            fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4.25rem" }}
            fontWeight="800"
            color="white"
            lineHeight="1.1"
            letterSpacing="-0.03em"
          >
            Welcome to JK-Junagadh
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600" color="#FFB300">
            College of Computer, Science & Information Technology
          </Text>

          <Text fontSize="sm" fontWeight="500" color="rgba(255,255,255,0.85)" lineHeight="1.7">
            Affiliated to Bhakta Kavi Narsinh Mehta University, Junagadh
          </Text>

          <Text fontSize={{ base: "sm", md: "md" }} color="rgba(255,255,255,0.75)" lineHeight="1.8" maxW="560px">
            Providing high-quality education in IT & Science for over two decades — empowering students with knowledge, skills, and values for a successful future.
          </Text>

          <HStack spacing={4} flexWrap="wrap" pt={2}>
            <Button
              as={RouterLink}
              to="/about"
              size="lg"
              fontWeight="700"
              borderRadius="xl"
              bg="#FFB300"
              color="#0B1F4D"
              px={8}
              _hover={{ bg: "#FF8F00", transform: "translateY(-2px)" }}
              transition="all 0.25s"
            >
              About College
            </Button>
            <Button
              as={RouterLink}
              to="/admission"
              size="lg"
              fontWeight="700"
              borderRadius="xl"
              variant="outline"
              borderColor="rgba(255,255,255,0.4)"
              color="white"
              px={8}
              _hover={{ bg: "rgba(255,255,255,0.1)", borderColor: "#00D4FF" }}
              transition="all 0.25s"
            >
              Apply Now
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  </Box>
);

export default HomeHero;
