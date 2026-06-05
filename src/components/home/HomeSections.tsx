import { useState, type FormEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
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
import { colors, glassCard, layout } from "../../theme/tokens";
import Section from "../shared/Section";
import SectionHeader from "../shared/SectionHeader";
import PageContainer from "../shared/PageContainer";

export const AboutSection = () => (
  <Section bg="bg.canvas">
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={layout.gridGapLg} alignItems="center">
      <GridItem>
        <Text variant="label" mb={4}>
          {ABOUT_HOME.badge}
        </Text>
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="800"
          color="brand.500"
          mb={{ base: 5, md: 6 }}
          lineHeight="1.15"
          letterSpacing="-0.02em"
        >
          {ABOUT_HOME.title}
        </Text>
        <VStack align="stretch" spacing={{ base: 4, md: 5 }} mb={{ base: 6, md: 8 }}>
          {ABOUT_HOME.paragraphs.map((p) => (
            <Text key={p.slice(0, 30)} fontSize="md" variant="secondary" lineHeight="1.85">
              {p}
            </Text>
          ))}
        </VStack>
        <Button as={RouterLink} to="/about" variant="gold" px={8}>
          More
        </Button>
      </GridItem>
      <GridItem>
        <Box borderRadius="28px" overflow="hidden" boxShadow="0 24px 64px rgba(11,31,77,0.12)">
          <Image
            src={ABOUT_HOME.image}
            alt="KJ Students"
            w="100%"
            h={{ base: "280px", md: "380px", lg: "420px" }}
            objectFit="cover"
          />
        </Box>
      </GridItem>
    </Grid>
  </Section>
);

export const MissionSection = () => (
  <Section compact>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={layout.gridGap}>
      {MISSION_MANAGEMENT.map((card) => (
        <Box
          key={card.title}
          p={{ base: 6, md: 8, lg: 10 }}
          borderRadius="24px"
          bg={colors.gradient.brand}
          boxShadow="0 12px 40px rgba(11,31,77,0.15)"
          _hover={{ transform: "translateY(-4px)" }}
          transition="all 0.3s"
        >
          <Text fontSize="xl" fontWeight="800" color="white" mb={4}>
            {card.title}
          </Text>
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight="1.8" mb={6}>
            {card.text}
          </Text>
          <Button as={RouterLink} to={card.href} size="sm" variant="gold">
            More
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  </Section>
);

export const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("bca");
  const courses = TAB_COURSES[activeTab] ?? [];

  return (
    <Section id="courses-preview" bg="bg.canvas">
      <SectionHeader badge="Our Courses" title="Courses for IT & Science" />

      <HStack
        spacing={2}
        overflowX="auto"
        pb={2}
        mb={{ base: 6, md: 8 }}
        justify={{ md: "center" }}
        flexWrap={{ md: "wrap" }}
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {COURSE_TABS.map((tab) => (
          <Button
            key={tab.id}
            size="sm"
            fontWeight="700"
            borderRadius="full"
            px={5}
            bg={activeTab === tab.id ? "accent.gold" : "white"}
            color={activeTab === tab.id ? "brand.500" : "text.muted"}
            border="1px solid"
            borderColor={activeTab === tab.id ? "accent.gold" : colors.border.light}
            boxShadow={activeTab === tab.id ? "0 4px 16px rgba(255,179,0,0.3)" : "none"}
            onClick={() => setActiveTab(tab.id)}
            flexShrink={0}
            _hover={{ bg: activeTab === tab.id ? "accent.goldHover" : colors.surface.muted }}
          >
            {tab.label}
          </Button>
        ))}
      </HStack>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={layout.gridGap}>
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
              <Text fontSize="sm" fontWeight="700" color="brand.500" lineHeight="1.5">
                {course.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Flex justify="center" mt={{ base: 8, md: 10 }}>
        <Button as={RouterLink} to="/courses" variant="primary" px={8} _hover={{ transform: "translateY(-2px)" }}>
          View All Courses
        </Button>
      </Flex>
    </Section>
  );
};

export const FacilitiesSection = () => (
  <Section id="facilities" contained={false} position="relative" overflow="hidden" py={layout.sectionPy}>
    <Box
      position="absolute"
      inset={0}
      bgImage="url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop)"
      bgSize="cover"
      bgPosition="center"
    />
    <Box position="absolute" inset={0} bg={colors.overlay.navy} />
    <PageContainer position="relative" zIndex={1}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={layout.gridGapLg} alignItems="center">
        <GridItem display="flex" justifyContent="center" py={{ base: 4, lg: 0 }}>
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
            variant="gold"
            color="white"
            boxShadow="0 8px 32px rgba(255,179,0,0.4)"
            _hover={{ transform: "scale(1.08)" }}
            transition="all 0.3s"
          />
        </GridItem>
        <GridItem>
          <Text as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="white" mb={{ base: 6, md: 8 }}>
            Campus Facilities
          </Text>
          <SimpleGrid columns={2} spacing={{ base: 3, md: 4 }}>
            {FACILITIES.map((f) => (
              <HStack
                key={f}
                spacing={3}
                p={{ base: 3, md: 4 }}
                borderRadius="xl"
                bg="rgba(255,255,255,0.08)"
                border="1px solid rgba(255,255,255,0.1)"
              >
                <Box w="8px" h="8px" borderRadius="full" bg="accent.cyan" flexShrink={0} />
                <Text fontSize="sm" fontWeight="500" color="white">
                  {f}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </PageContainer>
  </Section>
);

export const GallerySection = () => (
  <Section id="gallery" bg="bg.canvas">
    <SectionHeader title="Co-Curricular Activities" />
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={layout.gridGap}>
      {GALLERY_IMAGES.map((img) => (
        <Box
          key={img.alt}
          borderRadius="20px"
          overflow="hidden"
          boxShadow="0 8px 32px rgba(11,31,77,0.08)"
          _hover={{ transform: "translateY(-6px)" }}
          transition="all 0.3s"
        >
          <Image src={img.src} alt={img.alt} h={{ base: "200px", md: "220px" }} w="100%" objectFit="cover" />
        </Box>
      ))}
    </SimpleGrid>
  </Section>
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
    border: `1px solid ${colors.border.light}`,
    _focus: { borderColor: "accent.cyan", boxShadow: `0 0 0 1px ${colors.accent.cyan}` },
  };

  return (
    <Section>
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={layout.gridGapLg} alignItems="start">
        <GridItem id="departments">
          <Flex justify="space-between" align="center" mb={{ base: 5, md: 6 }}>
            <Text as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="brand.500">
              Departments
            </Text>
            <Button
              as={RouterLink}
              to="/departments"
              size="sm"
              variant="outline"
              fontWeight="600"
              _hover={{ bg: "brand.500", color: "white" }}
            >
              View All
            </Button>
          </Flex>
          <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={{ base: 4, md: 5 }}>
            {DEPARTMENT_GRID.map((dept) => (
              <Box
                key={dept.label}
                as={RouterLink}
                to={dept.href}
                position="relative"
                borderRadius="16px"
                overflow="hidden"
                h={{ base: "110px", md: "120px" }}
                cursor="pointer"
                display="block"
                _hover={{ transform: "translateY(-4px)", textDecoration: "none" }}
                transition="all 0.25s"
              >
                <Image src={dept.image} alt={dept.label} w="100%" h="100%" objectFit="cover" />
                <Flex
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(180deg, transparent 30%, rgba(11,31,77,0.85) 100%)"
                  align="flex-end"
                  p={3}
                >
                  <Text fontSize="xs" fontWeight="700" color="white">
                    {dept.label}
                  </Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </GridItem>

        <GridItem>
          <Box {...glassCard} overflow="hidden">
            <Box bg={colors.gradient.brand} py={4} px={6}>
              <Text fontSize="md" fontWeight="800" color="white" letterSpacing="wider">
                INQUIRY
              </Text>
            </Box>
            <Box as="form" onSubmit={handleSubmit} p={{ base: 5, md: 6 }}>
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
                    {INQUIRY_COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </Select>
                </FormControl>
                <Button type="submit" w="100%" variant="gold" fontWeight="800" letterSpacing="wider">
                  SUBMIT
                </Button>
              </VStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Section>
  );
};

export const ShiningStarsSection = () => (
  <Section id="rankers" bg="bg.canvas">
    <SectionHeader badge="Our Stars" title="Shining Stars of KJ" />
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={layout.gridGap}>
      {SHINING_STARS.map((star) => (
        <Box
          key={star.name}
          borderRadius="24px"
          overflow="hidden"
          bg="white"
          border="2px solid"
          borderColor="accent.teal"
          boxShadow="0 8px 32px rgba(11,31,77,0.08)"
          _hover={{ transform: "translateY(-6px)" }}
          transition="all 0.3s"
        >
          <Image src={star.image} alt={star.name} h={{ base: "240px", md: "260px" }} w="100%" objectFit="cover" objectPosition="top" />
          <Box p={5} textAlign="center">
            <Text fontSize="md" fontWeight="700" color="brand.500" mb={1}>
              {star.name}
            </Text>
            <Text fontSize="xs" fontWeight="600" color="accent.teal">
              {star.rank}
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Section>
);
