import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Flex,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import { CONTACT_WEBSITES } from "../data/pageContent";
import { CONTACT } from "../data/siteContent";

const ContactPage = () => {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", city: "", mobile: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your feedback. We will get back to you soon.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    setForm({ name: "", email: "", city: "", mobile: "", message: "" });
  };

  const inputStyle = {
    borderRadius: "xl",
    bg: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(11, 31, 77, 0.1)",
    _focus: { borderColor: "#00D4FF", boxShadow: "0 0 0 1px #00D4FF" },
    _hover: { borderColor: "rgba(11, 31, 77, 0.2)" },
  };

  return (
    <PageLayout>
      <PageBanner
        title="Contact"
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 10, md: 14 }}>
        <Box
          borderRadius="28px"
          overflow="hidden"
          bg="rgba(255,255,255,0.75)"
          backdropFilter="blur(14px)"
          border="1px solid rgba(255,255,255,0.6)"
          boxShadow="0 16px 48px rgba(11, 31, 77, 0.08)"
          sx={{ WebkitBackdropFilter: "blur(14px)" }}
        >
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem p={{ base: 6, md: 8, lg: 10 }}>
              <Box
                mb={6}
                p={5}
                borderRadius="20px"
                bg="linear-gradient(135deg, rgba(255,179,0,0.12), rgba(255,143,0,0.06))"
                border="1px solid rgba(255,179,0,0.2)"
              >
                <HStack spacing={4}>
                  <Flex
                    w="48px"
                    h="48px"
                    borderRadius="full"
                    bg="#FFB300"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Box as="svg" w="22px" h="22px" viewBox="0 0 24 24" fill="none" stroke="#0B1F4D" strokeWidth="2">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </Box>
                  </Flex>
                  <VStack align="flex-start" spacing={0}>
                    <Text fontSize="sm" fontWeight="700" color="#0B1F4D">
                      Your Comments are Much Appreciated
                    </Text>
                    <Text fontSize="xs" color="#64748B">
                      Feedback & Suggestions
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              <Text fontSize="xs" fontWeight="600" color="#FFB300" textTransform="uppercase" letterSpacing="wider" mb={1}>
                Contact Us / Feedback
              </Text>
              <Text fontSize="lg" fontWeight="700" color="#0B1F4D" mb={6}>
                Your suggestions are welcome. Keep in touch...
              </Text>

              <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600" color="#0F172A">Full Name</FormLabel>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      {...inputStyle}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600" color="#0F172A">Email</FormLabel>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Enter your email"
                      {...inputStyle}
                    />
                  </FormControl>
                  <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
                    <FormControl>
                      <FormLabel fontSize="sm" fontWeight="600" color="#0F172A">City</FormLabel>
                      <Input
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="Your city"
                        {...inputStyle}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize="sm" fontWeight="600" color="#0F172A">Mobile No.</FormLabel>
                      <Input
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        placeholder="Your mobile number"
                        {...inputStyle}
                      />
                    </FormControl>
                  </Grid>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="600" color="#0F172A">Message</FormLabel>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
                      rows={5}
                      {...inputStyle}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    size="lg"
                    fontWeight="700"
                    borderRadius="xl"
                    bg="#FFB300"
                    color="#0B1F4D"
                    _hover={{ bg: "#FF8F00", transform: "translateY(-1px)" }}
                    transition="all 0.2s"
                    alignSelf="flex-start"
                    px={10}
                  >
                    Send
                  </Button>
                </VStack>
              </Box>
            </GridItem>

            <GridItem
              p={{ base: 6, md: 8, lg: 10 }}
              bg="linear-gradient(180deg, rgba(11,31,77,0.04) 0%, rgba(0,212,255,0.04) 100%)"
              borderLeft={{ lg: "1px solid rgba(11,31,77,0.06)" }}
            >
              <Text fontSize="xl" fontWeight="800" color="#0B1F4D" mb={2}>
                Address
              </Text>
              <Text fontSize="sm" color="#64748B" mb={8}>
                Please don&apos;t hesitate to contact us.
              </Text>

              <VStack align="stretch" spacing={6}>
                <ContactRow icon="home" text={CONTACT.address} />
                <ContactRow icon="phone" text={CONTACT.phones.join(", ")} />
                <ContactRow icon="email" text={CONTACT.email} />
                <ContactRow icon="web" text={CONTACT_WEBSITES.join(", ")} />
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      <Box px={{ base: 4, md: 6, lg: 8 }} pb={{ base: 10, md: 14 }}>
        <Container maxW="1400px" p={0}>
          <Box
            borderRadius="24px"
            overflow="hidden"
            h={{ base: "280px", md: "400px" }}
            boxShadow="0 16px 48px rgba(11, 31, 77, 0.1)"
            border="1px solid rgba(11, 31, 77, 0.08)"
          >
            <Box
              as="iframe"
              title="JK College Location"
              src="https://maps.google.com/maps?q=JK+College+Junagadh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              w="100%"
              h="100%"
              border="none"
            />
          </Box>
        </Container>
      </Box>
    </PageLayout>
  );
};

const ContactRow = ({ icon, text }: { icon: string; text: string }) => {
  const icons: Record<string, JSX.Element> = {
    home: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
    email: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    web: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </>
    ),
  };

  return (
    <HStack align="flex-start" spacing={4}>
      <Flex
        w="44px"
        h="44px"
        borderRadius="full"
        bg="rgba(11, 31, 77, 0.06)"
        border="1px solid rgba(11, 31, 77, 0.08)"
        align="center"
        justify="center"
        flexShrink={0}
      >
        <Box as="svg" w="18px" h="18px" viewBox="0 0 24 24" fill="none" stroke="#0B1F4D" strokeWidth="2">
          {icons[icon]}
        </Box>
      </Flex>
      <Text fontSize="sm" color="#475569" lineHeight="1.7" pt={2}>
        {text}
      </Text>
    </HStack>
  );
};

export default ContactPage;
