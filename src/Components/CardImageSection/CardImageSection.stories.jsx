import CardImageSection from "./CardImageSection"
import ProductImageMobile from "../../assets/images/image-product-mobile.jpg"
import ProductImageDesktop from "../../assets/images/image-product-desktop.jpg"


export default {
  component: CardImageSection,
  title: 'Components/Organism/CardImageSection',
  tags: ['autodocs'],
}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    }
  },
  args: {
    imgUrlMobile: ProductImageMobile,
  },
  argTypes: {
    imgUrlMobile: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".jpeg", ".gif"],
        defaultValue: ProductImageMobile
      }
    }
  }
}

export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    }
  },
  args: {
    imgUrlDesktop: ProductImageDesktop,
  },
  argTypes: {
    imgUrlDesktop: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".jpeg", ".gif"],
        defaultValue: ProductImageDesktop
      }
    },
  }
}