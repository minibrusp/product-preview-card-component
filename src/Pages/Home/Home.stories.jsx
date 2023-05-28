import Home from "./Home"
import ProductImageMobile from "../../assets/images/image-product-mobile.jpg"
import ProductImageDesktop from "../../assets/images/image-product-desktop.jpg"

export default {
  component: Home,
  title: 'Pages/Home',
  tags: ['autodocs'],
  args: {
    productName: "Gabrielle Essence Eau De Parfum",
    productType: "Perfume",
    text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    currentPrice: "149.99",
    originalPrice: "169.99",
    imgUrlDesktop: ProductImageDesktop,
    imgUrlMobile: ProductImageMobile,
  },
  argTypes: {
    currentPrice: { control: "number" },
    originalPrice: { control: "number" },
  }
}

export const Mobile = {
  argTypes: {
    imgUrlMobile: {
      control: "file",
      defaultValue: ProductImageMobile
    },
    imgUrlDesktop: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    }
  },
}

export const Desktop = {
  argTypes: {
    imgUrlDesktop: {
      control: "file",
      defaultValue: ProductImageDesktop
    },
    imgUrlMobile: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    }
  }
}