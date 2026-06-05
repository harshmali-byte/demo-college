import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colors as tokens } from "./tokens";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  colors: {
    brand: {
      50: "#E8EDF5",
      100: "#C5D0E3",
      200: "#9BAEC9",
      300: "#718DAF",
      400: "#4D6E96",
      500: tokens.brand.primary,
      600: tokens.brand.secondary,
      700: tokens.brand.tertiary,
      800: tokens.brand.footer,
      900: tokens.brand.footerDark,
    },
    accent: {
      cyan: tokens.accent.cyan,
      teal: tokens.accent.teal,
      gold: tokens.accent.gold,
      goldHover: tokens.accent.goldHover,
    },
  },
  semanticTokens: {
    colors: {
      "bg.canvas": tokens.surface.bg,
      "bg.card": tokens.surface.card,
      "text.primary": tokens.text.primary,
      "text.secondary": tokens.text.secondary,
      "text.muted": tokens.text.muted,
      "border.default": tokens.border.light,
      "border.accent": tokens.border.accent,
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "bg.canvas",
        color: "text.primary",
      },
      body: {
        margin: 0,
        padding: 0,
      },
      a: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "xl",
        transition: "all 0.25s ease",
      },
      variants: {
        primary: {
          bg: "brand.500",
          color: "white",
          boxShadow: "0 4px 20px rgba(11, 31, 77, 0.25)",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-1px)",
            boxShadow: "0 8px 28px rgba(11, 31, 77, 0.35)",
            _disabled: { transform: "none" },
          },
          _active: { bg: "brand.700", transform: "translateY(0)" },
        },
        gold: {
          bg: "accent.gold",
          color: "brand.500",
          fontWeight: "700",
          boxShadow: "0 4px 16px rgba(255, 179, 0, 0.3)",
          _hover: {
            bg: "accent.goldHover",
            transform: "translateY(-1px)",
          },
          _active: { transform: "translateY(0)" },
        },
        outline: {
          borderColor: "border.default",
          color: "brand.500",
          bg: "white",
          _hover: {
            bg: "brand.50",
            borderColor: "accent.cyan",
          },
        },
        ghost: {
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
        accent: {
          bg: "accent.cyan",
          color: "brand.500",
          fontWeight: "700",
          _hover: {
            bg: "accent.teal",
            color: "white",
          },
        },
        glass: {
          bg: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(12px)",
          border: "1px solid",
          borderColor: "whiteAlpha.600",
          color: "brand.500",
          _hover: {
            bg: "rgba(255,255,255,0.8)",
            borderColor: "accent.cyan",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Link: {
      baseStyle: {
        color: "brand.500",
        _hover: {
          color: "accent.cyan",
          textDecoration: "none",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.500",
        fontWeight: "800",
      },
    },
    Text: {
      variants: {
        muted: {
          color: "text.muted",
        },
        secondary: {
          color: "text.secondary",
        },
        accent: {
          color: "accent.cyan",
          fontWeight: "600",
        },
        label: {
          color: "accent.gold",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "wider",
          fontSize: "sm",
        },
      },
    },
    Badge: {
      variants: {
        brand: {
          bg: "brand.50",
          color: "brand.500",
          border: "1px solid",
          borderColor: "border.accent",
        },
        gold: {
          bg: "accent.gold",
          color: "brand.500",
          fontWeight: "700",
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderRadius: "xl",
            borderColor: "border.default",
            bg: "white",
            _hover: { borderColor: "border.medium" },
            _focus: {
              borderColor: "accent.cyan",
              boxShadow: "0 0 0 1px var(--chakra-colors-accent-cyan)",
            },
          },
        },
      },
    },
    Textarea: {
      variants: {
        outline: {
          borderRadius: "xl",
          borderColor: "border.default",
          bg: "white",
          _hover: { borderColor: "border.medium" },
          _focus: {
            borderColor: "accent.cyan",
            boxShadow: "0 0 0 1px var(--chakra-colors-accent-cyan)",
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderRadius: "xl",
            borderColor: "border.default",
            bg: "white",
            _hover: { borderColor: "border.medium" },
            _focus: {
              borderColor: "accent.cyan",
              boxShadow: "0 0 0 1px var(--chakra-colors-accent-cyan)",
            },
          },
        },
      },
    },
  },
});

export default theme;
export { tokens };
