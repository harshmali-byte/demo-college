import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Grid,
  GridItem,
  Image,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { COLLEGE, CONTACT, SOCIAL_LINKS } from "../../data/siteContent";
import { FLYER_MODAL } from "../../data/modalContent";
import SocialIcon from "../shared/SocialIcon";

type WelcomeFlyerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WelcomeFlyerModal = ({ isOpen, onClose }: WelcomeFlyerModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered motionPreset="scale" closeOnOverlayClick={false}>
    <ModalOverlay bg="rgba(11, 31, 77, 0.75)" backdropFilter="blur(8px)" />
    <ModalContent
      borderRadius="28px"
      overflow="hidden"
      mx={4}
      bg="white"
      boxShadow="0 32px 80px rgba(11, 31, 77, 0.35)"
      maxH="90vh"
    >
      <IconButton
        aria-label="Close"
        icon={
          <Box as="svg" w="18px" h="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </Box>
        }
        position="absolute"
        top={4}
        right={4}
        zIndex={10}
        size="sm"
        borderRadius="full"
        bg="rgba(255,255,255,0.9)"
        color="#0B1F4D"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        onClick={onClose}
        _hover={{ bg: "#FFB300", transform: "rotate(90deg)" }}
        transition="all 0.3s"
      />

      <ModalBody p={0} overflowY="auto">
        <Box
          bg="linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(255,255,255,1) 40%, rgba(0,191,165,0.04) 100%)"
          p={{ base: 5, md: 8 }}
        >
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ md: "flex-start" }} gap={6} mb={8}>
            <HStack spacing={4} align="flex-start">
              <Flex
                w="64px"
                h="64px"
                borderRadius="full"
                bg="linear-gradient(135deg, #0B1F4D, #132B67)"
                border="3px solid rgba(0,212,255,0.3)"
                align="center"
                justify="center"
                flexShrink={0}
                boxShadow="0 8px 24px rgba(11,31,77,0.25)"
              >
                <Text fontSize="sm" fontWeight="800" color="white">JK</Text>
              </Flex>
              <VStack align="flex-start" spacing={1}>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="800"
                  bgGradient="linear(to-r, #0B1F4D, #132B67)"
                  bgClip="text"
                  letterSpacing="0.02em"
                >
                  {COLLEGE.brandTitle}
                </Text>
                <Text fontSize="sm" fontStyle="italic" color="#1E88E5" fontWeight="500">
                  {FLYER_MODAL.tagline}
                </Text>
              </VStack>
            </HStack>

            <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={3}>
              <Box
                w="72px"
                h="72px"
                borderRadius="12px"
                bg="white"
                border="2px dashed rgba(11,31,77,0.15)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={2}
              >
                <Box
                  w="100%"
                  h="100%"
                  bgImage="repeating-linear-gradient(0deg, #0B1F4D 0px, #0B1F4D 2px, white 2px, white 4px), repeating-linear-gradient(90deg, #0B1F4D 0px, #0B1F4D 2px, white 2px, white 4px)"
                  bgSize="8px 8px"
                  borderRadius="6px"
                  opacity={0.7}
                />
              </Box>
              <Text fontSize="2xs" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="wider">
                Scan for Location
              </Text>
              <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={1}>
                {FLYER_MODAL.features.map((f) => (
                  <HStack key={f} spacing={2}>
                    <Box w="6px" h="6px" borderRadius="full" bg="#00D4FF" />
                    <Text fontSize="xs" fontWeight="600" color="#0B1F4D">{f}</Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Flex>

          <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={8}>
            <GridItem>
              <Text
                fontSize="2xl"
                fontWeight="800"
                color="#166534"
                mb={5}
                fontFamily="Georgia, serif"
              >
                Our Courses
              </Text>
              <VStack spacing={4} align="stretch">
                {FLYER_MODAL.courseGroups.map((group) => (
                  <Box
                    key={group.title}
                    borderRadius="20px"
                    overflow="hidden"
                    border="1px solid rgba(11,31,77,0.08)"
                    boxShadow="0 4px 20px rgba(11,31,77,0.06)"
                  >
                    <Box bg={group.color} px={5} py={2.5}>
                      <Text fontSize="sm" fontWeight="700" color="white">{group.title}</Text>
                    </Box>
                    <Flex px={5} py={4} gap={3} flexWrap="wrap" bg="white">
                      {group.courses.map((course) => (
                        <Box
                          key={course}
                          px={4}
                          py={2}
                          borderRadius="full"
                          bg="rgba(11,31,77,0.04)"
                          border="1px solid rgba(11,31,77,0.08)"
                        >
                          <Text fontSize="sm" fontWeight="700" color="#0B1F4D">{course}</Text>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </GridItem>

            <GridItem>
              <Box
                borderRadius="24px"
                overflow="hidden"
                position="relative"
                boxShadow="0 16px 48px rgba(11,31,77,0.12)"
              >
                <Image
                  src={FLYER_MODAL.studentImage}
                  alt="JK Student"
                  w="100%"
                  h={{ base: "280px", md: "340px" }}
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="linear-gradient(180deg, transparent, rgba(11,31,77,0.9))"
                  p={6}
                >
                  <VStack align="flex-start" spacing={2}>
                    {FLYER_MODAL.highlights.map((h) => (
                      <HStack key={h} spacing={2}>
                        <Text color="#00D4FF" fontWeight="700">—</Text>
                        <Text fontSize="sm" fontWeight="600" color="white">{h}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={4}
          px={{ base: 5, md: 8 }}
          py={5}
          bg="linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)"
        >
          <HStack spacing={3}>
            <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </Box>
            <Link href={`https://${FLYER_MODAL.website}`} fontSize="sm" fontWeight="600" color="white" _hover={{ color: "#00D4FF" }}>
              {FLYER_MODAL.website}
            </Link>
          </HStack>

          <HStack spacing={3}>
            <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </Box>
            <Text fontSize="sm" fontWeight="600" color="white">
              {CONTACT.phones.join(", ")}
            </Text>
          </HStack>

          <HStack spacing={2}>
            {SOCIAL_LINKS.slice(0, 5).map((s) => (
              <IconButton
                key={s.icon}
                aria-label={s.label}
                icon={<SocialIcon icon={s.icon} size="14px" />}
                size="xs"
                borderRadius="full"
                bg="rgba(255,255,255,0.1)"
                color="white"
                _hover={{ bg: "#FFB300", color: "#0B1F4D" }}
              />
            ))}
          </HStack>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default WelcomeFlyerModal;
