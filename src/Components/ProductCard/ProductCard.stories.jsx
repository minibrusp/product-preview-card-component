import ProductCard from "./ProductCard"

export default {
  component: ProductCard,
  title: 'Components/Templates/ProductCard',
  tags: ['autodocs'],
  args: {
    product: {
      productName: "Gabrielle Essence Eau De Parfum",
      productType: "Perfume",
      text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
      currentPrice: "149.99",
      originalPrice: "169.99",
      imgUrlMobile: "/src/assets/images/image-product-mobile.jpg",
      imgUrlDesktop: "/src/assets/images/image-product-desktop.jpg",
    }
  },
  argTypes: {
    product: { control: "object" }
  }
}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    }
  },
}

export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    }
  }
}