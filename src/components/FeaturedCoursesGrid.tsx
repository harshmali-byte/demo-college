import {
  Box,
  Container,
  Grid,
  Text,
  Image,
  Flex,
  Badge,
  Button,
  VStack,
} from "@chakra-ui/react";
import { COURSES } from "../data/siteContent";

const FeaturedCoursesGrid = () => (
  <Box
    as="section"
    id="courses"
    position="relative"
    py={{ base: 12, md: 16, lg: 20 }}
    bg="#F7FAFC"
  >
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      bgImage="radial-gradient(circle at 1px 1px, rgba(11, 31, 77, 0.04) 1px, transparent 0)"
      bgSize="32px 32px"
    />
    <Box
      position="absolute"
      top="10%"
      right="-5%"
      w="300px"
      h="300px"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)"
      filter="blur(50px)"
      pointerEvents="none"
    />

    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative">
      <VStack align="flex-start" spacing={3} mb={{ base: 8, md: 12 }}>
        <Badge
          px={4}
          py={1.5}
          borderRadius="full"
          bg="rgba(255,255,255,0.7)"
          color="#0B1F4D"
          fontSize="xs"
          fontWeight="600"
          border="1px solid rgba(0, 212, 255, 0.3)"
          boxShadow="0 0 20px rgba(0, 212, 255, 0.1)"
        >
          Academic Programs
        </Badge>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="700"
          color="#0F172A"
          maxW="600px"
        >
          Explore our undergraduate, postgraduate, and diploma programs designed for future-ready careers.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={{ base: 6, md: 8 }}
      >
        {COURSES.map((course, index) => (
          <Box
            key={course.id}
            role="article"
            borderRadius="24px"
            overflow="hidden"
            bg="rgba(255, 255, 255, 0.65)"
            backdropFilter="blur(12px)"
            border="1px solid rgba(255, 255, 255, 0.7)"
            boxShadow="0 8px 32px rgba(11, 31, 77, 0.06)"
            transition="all 0.35s ease"
            sx={{ WebkitBackdropFilter: "blur(12px)" }}
            gridColumn={
              index === COURSES.length - 1
                ? { base: "span 1", sm: "span 2", lg: "2 / 3" }
                : undefined
            }
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "0 20px 48px rgba(11, 31, 77, 0.12), 0 0 32px rgba(0, 212, 255, 0.08)",
              borderColor: "rgba(0, 212, 255, 0.3)",
            }}
          >
            <Box position="relative" overflow="hidden" h={{ base: "200px", md: "220px" }}>
              <Image
                src={course.image}
                alt={`${course.title} - students in laboratory`}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.5s ease"
                fallbackSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                _groupHover={{ transform: "scale(1.05)" }}
              />
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, transparent 40%, rgba(11, 31, 77, 0.5) 100%)"
              />
              <Badge
                position="absolute"
                top={4}
                left={4}
                px={3}
                py={1}
                borderRadius="full"
                bg="rgba(255,255,255,0.85)"
                backdropFilter="blur(8px)"
                color="#0B1F4D"
                fontSize="2xs"
                fontWeight="700"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                {course.category}
              </Badge>
            </Box>

            <Box p={{ base: 5, md: 6 }}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="700"
                color="#0F172A"
                lineHeight="1.4"
                mb={1}
              >
                {course.title}
              </Text>
              <Text
                fontSize="sm"
                fontWeight="600"
                bgGradient="linear(to-r, #00D4FF, #00BFA5)"
                bgClip="text"
                sx={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                mb={4}
              >
                {course.shortTitle}
              </Text>

              <Flex justify="space-between" align="center" mb={4}>
                <Text fontSize="xs" color="#64748B" fontWeight="500">
                  Duration: {course.duration}
                </Text>
                <Text fontSize="xs" color="#64748B" fontWeight="500">
                  {course.seats}
                </Text>
              </Flex>

              <Button
                w="100%"
                size="sm"
                fontWeight="600"
                borderRadius="xl"
                variant="outline"
                borderColor="rgba(11, 31, 77, 0.15)"
                color="#0B1F4D"
                _hover={{
                  bg: "linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)",
                  color: "white",
                  borderColor: "transparent",
                }}
                transition="all 0.25s ease"
              >
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default FeaturedCoursesGrid;
