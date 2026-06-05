import { useState, type FormEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Button,
  HStack,
  VStack,
  Grid,
  GridItem,
  Image,
  Flex,
  SimpleGrid,
  Input,
  Select,
  FormControl,
  FormLabel,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import {
  PLATFORM_CARDS,
  ABOUT_HOME,
  MISSION_MANAGEMENT,
  COURSE_TABS,
  TAB_COURSES,
  FACILITIES,
  GALLERY_IMAGES,
  DEPARTMENT_GRID,
  SHINING_STARS,
  INQUIRY_COURSES,
} from "../../data/homeContent";

const glass = {
  borderRadius: "24px",
  bg: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.6)",
  boxShadow: "0 8px 32px rgba(11,31,77,0.06)",
  sx: { WebkitBackdropFilter: "blur(12px)" },
};

export const PlatformSection = () => (
  <Box py={{ base: 8, md: 10 }} mt={{ base: -6, md: -10 }} position="relative" zIndex={2}>
    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
      <VStack spacing={5}>
        {PLATFORM_CARDS.map((card) => (
          <Flex
            key={card.title}
            direction={{ base: "column", md: "row" }}
            align={{ md: "center" }}
            justify="space-between"
            gap={6}
            w="100%"
            p={{ base: 6, md: 8 }}
            borderRadius="24px"
            bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
            boxShadow="0 16px 48px rgba(11,31,77,0.2)"
          >
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="700" color="white" maxW="400px">
              {card.title}
            </Text>
            <HStack spacing={4} flexWrap="wrap">
              {card.items.map((item) => (
                <VStack
                  key={item.label}
                  w="90px"
                  h="90px"
                  borderRadius="20px"
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.15)"
                  justify="center"
                  spacing={2}
                  _hover={{ bg: "rgba(255,255,255,0.15)", transform: "translateY(-3px)" }}
                  transition="all 0.25s"
                  cursor="pointer"
                >
                  <Box w="10px" h="10px" borderRadius="full" bg={item.color} boxShadow={`0 0 12px ${item.color}`} />
                  <Text fontSize="2xs" fontWeight="700" color="white" textAlign="center" px={2}>
                    {item.label}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </Flex>
        ))}
      </VStack>
    </Container>
  </Box>
);

export const AboutSection = () => (
  <Box as="section" py={{ base: 14, md: 20 }} bg="#F7FAFC">
    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
        <GridItem>
          <Text fontSize="sm" fontWeight="700" color="#FFB300" textTransform="uppercase" letterSpacing="wider" mb={3}>
            {ABOUT_HOME.badge}
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="#0B1F4D" mb={6} lineHeight="1.2">
            {ABOUT_HOME.title}
          </Text>
          <VStack align="stretch" spacing={4} mb={8}>
            {ABOUT_HOME.paragraphs.map((p) => (
              <Text key={p.slice(0, 30)} fontSize="md" color="#475569" lineHeight="1.85">{p}</Text>
            ))}
          </VStack>
          <Button
            as={RouterLink}
            to="/about"
            fontWeight="700"
            borderRadius="xl"
            bg="#FFB300"
            color="#0B1F4D"
            px={8}
            _hover={{ bg: "#FF8F00" }}
          >
            More
          </Button>
        </GridItem>
        <GridItem>
          <Box borderRadius="28px" overflow="hidden" boxShadow="0 24px 64px rgba(11,31,77,0.12)">
            <Image src={ABOUT_HOME.image} alt="JK Students" w="100%" h={{ base: "300px", md: "420px" }} objectFit="cover" />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export const MissionSection = () => (
  <Box py={{ base: 10, md: 14 }}>
    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {MISSION_MANAGEMENT.map((card) => (
          <Box
            key={card.title}
            p={{ base: 6, md: 8 }}
            borderRadius="24px"
            bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
            boxShadow="0 12px 40px rgba(11,31,77,0.15)"
            _hover={{ transform: "translateY(-4px)" }}
            transition="all 0.3s"
          >
            <Text fontSize="xl" fontWeight="800" color="white" mb={4}>{card.title}</Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight="1.8" mb={6}>{card.text}</Text>
            <Button
              as={RouterLink}
              to={card.href}
              size="sm"
              fontWeight="700"
              borderRadius="xl"
              bg="#FFB300"
              color="#0B1F4D"
              _hover={{ bg: "#FF8F00" }}
            >
              More
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("bca");
  const courses = TAB_COURSES[activeTab] ?? [];

  return (
    <Box as="section" id="courses-preview" py={{ base: 14, md: 20 }} bg="#F7FAFC">
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={3} mb={10} textAlign="center">
          <Text fontSize="sm" fontWeight="700" color="#FFB300" textTransform="uppercase" letterSpacing="wider">Our Courses</Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="#0B1F4D">Courses for IT & Science</Text>
        </VStack>

        <HStack spacing={2} overflowX="auto" pb={4} mb={8} justify={{ md: "center" }} flexWrap={{ md: "wrap" }}>
          {COURSE_TABS.map((tab) => (
            <Button
              key={tab.id}
              size="sm"
              fontWeight="700"
              borderRadius="full"
              px={5}
              bg={activeTab === tab.id ? "#FFB300" : "white"}
              color={activeTab === tab.id ? "#0B1F4D" : "#64748B"}
              border="1px solid"
              borderColor={activeTab === tab.id ? "#FFB300" : "rgba(11,31,77,0.1)"}
              boxShadow={activeTab === tab.id ? "0 4px 16px rgba(255,179,0,0.3)" : "none"}
              onClick={() => setActiveTab(tab.id)}
              flexShrink={0}
              _hover={{ bg: activeTab === tab.id ? "#FF8F00" : "rgba(11,31,77,0.04)" }}
            >
              {tab.label}
            </Button>
          ))}
        </HStack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {courses.map((course) => (
            <Box
              key={course.title}
              borderRadius="20px"
              overflow="hidden"
              bg="white"
              boxShadow="0 8px 32px rgba(11,31,77,0.08)"
              _hover={{ transform: "translateY(-6px)", boxShadow: "0 16px 48px rgba(11,31,77,0.12)" }}
              transition="all 0.3s"
            >
              <Image src={course.image} alt={course.title} h="180px" w="100%" objectFit="cover" />
              <Box p={5}>
                <Text fontSize="sm" fontWeight="700" color="#0B1F4D" lineHeight="1.5">{course.title}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={10}>
          <Button as={RouterLink} to="/courses" fontWeight="700" borderRadius="xl" bg="linear-gradient(135deg, #0B1F4D, #132B67)" color="white" px={8} _hover={{ transform: "translateY(-2px)" }}>
            View All Courses
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export const FacilitiesSection = () => (
  <Box as="section" id="facilities" position="relative" py={{ base: 16, md: 24 }} overflow="hidden">
    <Box
      position="absolute"
      inset={0}
      bgImage="url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop)"
      bgSize="cover"
      bgPosition="center"
    />
    <Box position="absolute" inset={0} bg="rgba(11,31,77,0.85)" />
    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={1}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
        <GridItem display="flex" justifyContent="center">
          <IconButton
            aria-label="Play campus tour video"
            icon={
              <Box as="svg" w="28px" h="28px" viewBox="0 0 24 24" fill="white" ml={1}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </Box>
            }
            w="90px"
            h="90px"
            borderRadius="full"
            bg="#FFB300"
            color="white"
            boxShadow="0 8px 32px rgba(255,179,0,0.4)"
            _hover={{ transform: "scale(1.08)", bg: "#FF8F00" }}
            transition="all 0.3s"
          />
        </GridItem>
        <GridItem>
          <Text fontSize="2xl" fontWeight="800" color="white" mb={8}>Campus Facilities</Text>
          <SimpleGrid columns={2} spacing={4}>
            {FACILITIES.map((f) => (
              <HStack key={f} spacing={3} p={3} borderRadius="xl" bg="rgba(255,255,255,0.08)" border="1px solid rgba(255,255,255,0.1)">
                <Box w="8px" h="8px" borderRadius="full" bg="#00D4FF" flexShrink={0} />
                <Text fontSize="sm" fontWeight="500" color="white">{f}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export const GallerySection = () => (
  <Box as="section" id="gallery" py={{ base: 14, md: 20 }} bg="#F7FAFC">
    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="#0B1F4D" mb={10} textAlign="center">
        Co-Curricular Activities
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
        {GALLERY_IMAGES.map((img) => (
          <Box
            key={img.alt}
            borderRadius="20px"
            overflow="hidden"
            boxShadow="0 8px 32px rgba(11,31,77,0.08)"
            _hover={{ transform: "translateY(-6px)" }}
            transition="all 0.3s"
          >
            <Image src={img.src} alt={img.alt} h="220px" w="100%" objectFit="cover" />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export const DepartmentsInquirySection = () => {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", course: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry submitted!", status: "success", duration: 3000, position: "top" });
    setForm({ name: "", email: "", mobile: "", course: "" });
  };

  const inputStyle = {
    borderRadius: "xl",
    bg: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(11,31,77,0.1)",
    _focus: { borderColor: "#00D4FF", boxShadow: "0 0 0 1px #00D4FF" },
  };

  return (
    <Box as="section" py={{ base: 14, md: 20 }}>
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={{ base: 10, lg: 12 }}>
          <GridItem id="departments">
            <Text fontSize="xl" fontWeight="800" color="#0B1F4D" mb={6}>Departments</Text>
            <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={4}>
              {DEPARTMENT_GRID.map((dept) => (
                <Box
                  key={dept.label}
                  position="relative"
                  borderRadius="16px"
                  overflow="hidden"
                  h="120px"
                  cursor="pointer"
                  _hover={{ transform: "translateY(-4px)" }}
                  transition="all 0.25s"
                >
                  <Image src={dept.image} alt={dept.label} w="100%" h="100%" objectFit="cover" />
                  <Flex position="absolute" inset={0} bg="linear-gradient(180deg, transparent 30%, rgba(11,31,77,0.85) 100%)" align="flex-end" p={3}>
                    <Text fontSize="xs" fontWeight="700" color="white">{dept.label}</Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </GridItem>

          <GridItem>
            <Box {...glass} overflow="hidden">
              <Box bg="linear-gradient(135deg, #0B1F4D, #132B67)" py={4} px={6}>
                <Text fontSize="md" fontWeight="800" color="white" letterSpacing="wider">INQUIRY</Text>
              </Box>
              <Box as="form" onSubmit={handleSubmit} p={6}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600">Name</FormLabel>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" {...inputStyle} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600">Email</FormLabel>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" {...inputStyle} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600">Mobile</FormLabel>
                    <Input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="Your mobile" {...inputStyle} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600">Course</FormLabel>
                    <Select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} placeholder="Select course" {...inputStyle}>
                      {INQUIRY_COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </Select>
                  </FormControl>
                  <Button type="submit" w="100%" fontWeight="800" borderRadius="xl" bg="#FFB300" color="#0B1F4D" letterSpacing="wider" _hover={{ bg: "#FF8F00" }}>
                    SUBMIT
                  </Button>
                </VStack>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export const ShiningStarsSection = () => (
  <Box as="section" id="rankers" py={{ base: 14, md: 20 }} bg="#F7FAFC">
    <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
      <VStack spacing={3} mb={10} textAlign="center">
        <Text fontSize="sm" fontWeight="700" color="#FFB300" textTransform="uppercase" letterSpacing="wider">Our Stars</Text>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="#0B1F4D">Shining Stars of JK</Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
        {SHINING_STARS.map((star) => (
          <Box
            key={star.name}
            borderRadius="24px"
            overflow="hidden"
            bg="white"
            border="2px solid"
            borderColor="#43A047"
            boxShadow="0 8px 32px rgba(11,31,77,0.08)"
            _hover={{ transform: "translateY(-6px)" }}
            transition="all 0.3s"
          >
            <Image src={star.image} alt={star.name} h="260px" w="100%" objectFit="cover" objectPosition="top" />
            <Box p={5} textAlign="center">
              <Text fontSize="md" fontWeight="700" color="#0B1F4D" mb={1}>{star.name}</Text>
              <Text fontSize="xs" fontWeight="600" color="#43A047">{star.rank}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);
