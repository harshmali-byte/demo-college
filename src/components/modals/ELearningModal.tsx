import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Text,
  VStack,
  HStack,
  Flex,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { ELEARNING_MODAL } from "../../data/modalContent";

type ELearningModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PlatformIcon = ({ name }: { name: string }) => (
  <Flex
    w="72px"
    h="72px"
    borderRadius="20px"
    bg={name === "eGuru" ? "linear-gradient(135deg, #1E88E5, #FF8F00)" : "linear-gradient(135deg, #1565C0, #00BFA5)"}
    align="center"
    justify="center"
    boxShadow="0 8px 24px rgba(11,31,77,0.2)"
  >
    {name === "eGuru" ? (
      <Box as="svg" w="36px" h="36px" viewBox="0 0 24 24" fill="white">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h6" stroke="white" strokeWidth="1.5" fill="none" />
      </Box>
    ) : (
      <Text fontSize="2xl" fontWeight="800" color="white">G</Text>
    )}
  </Flex>
);

const ELearningModal = ({ isOpen, onClose }: ELearningModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered motionPreset="slideInBottom" closeOnOverlayClick={false}>
    <ModalOverlay bg="rgba(11, 31, 77, 0.75)" backdropFilter="blur(8px)" />
    <ModalContent
      borderRadius="28px"
      overflow="hidden"
      mx={4}
      bg="white"
      boxShadow="0 32px 80px rgba(11, 31, 77, 0.35)"
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

      <ModalBody p={{ base: 6, md: 8 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="800"
          color="#0B1F4D"
          textAlign="center"
          mb={8}
          lineHeight="1.4"
        >
          {ELEARNING_MODAL.title}
        </Text>

        <VStack spacing={5} align="stretch">
          {ELEARNING_MODAL.platforms.map((platform) => (
            <Box
              key={platform.name}
              p={6}
              borderRadius="24px"
              bg="rgba(255,255,255,0.8)"
              border="1px solid rgba(11,31,77,0.08)"
              boxShadow="0 8px 32px rgba(11,31,77,0.06)"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 16px 48px rgba(11,31,77,0.12)",
                borderColor: platform.accent,
              }}
              transition="all 0.3s ease"
              cursor="pointer"
            >
              <VStack spacing={4}>
                <PlatformIcon name={platform.name} />
                <Text
                  fontSize="2xl"
                  fontWeight="800"
                  bgGradient={platform.gradient}
                  bgClip="text"
                >
                  {platform.name}
                </Text>
                <Text fontSize="sm" fontWeight="500" color="#64748B" textAlign="center">
                  {platform.tagline}
                </Text>
                <Link
                  href={`https://${platform.url}`}
                  fontSize="sm"
                  fontWeight="700"
                  color={platform.accent}
                  _hover={{ textDecoration: "underline" }}
                >
                  {platform.url}
                </Link>
              </VStack>
            </Box>
          ))}
        </VStack>

        <HStack justify="center" mt={8}>
          <Box
            as="button"
            px={10}
            py={3}
            borderRadius="xl"
            fontWeight="700"
            fontSize="sm"
            color="#0B1F4D"
            border="2px solid rgba(11,31,77,0.15)"
            bg="white"
            onClick={onClose}
            _hover={{ bg: "#FFB300", borderColor: "#FFB300" }}
            transition="all 0.25s"
          >
            Close
          </Box>
        </HStack>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ELearningModal;
