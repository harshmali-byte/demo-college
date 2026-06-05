import { Image, type ImageProps } from "@chakra-ui/react";
import kjLogo from "../../kjLogo.png";

type KJLogoProps = Omit<ImageProps, "src" | "alt"> & {
  size?: ImageProps["h"];
};

const KJLogo = ({ size = "52px", ...props }: KJLogoProps) => (
  <Image
    src={kjLogo}
    alt="KJ Junagadh"
    h={size}
    w="auto"
    objectFit="contain"
    flexShrink={0}
    {...props}
  />
);

export default KJLogo;
