declare module "react-awesome-lightbox" {
  import { ComponentType } from "react";

  interface LightboxProps {
    images: { url: string }[];
    startIndex?: number;
    onClose: () => void;
  }

  const Lightbox: ComponentType<LightboxProps>;
  export default Lightbox;
}
