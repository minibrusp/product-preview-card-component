import CardImage from "./CardImage"
import ProductImageMobile from "../../assets/images/image-product-mobile.jpg"
import ProductImageDesktop from "../../assets/images/image-product-desktop.jpg"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"


export default {
  component: CardImage,
  title: 'Components/Atoms/CardImage',
  tags: ['autodocs'],
  args: {
    altText: "Product Image"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const image = canvas.getByAltText(/Product Image/i)

    await expect(image).toBeInTheDocument()
  }
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
  },
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