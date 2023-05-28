import Icon from "./Icon"
import CartIcon1 from "../../assets/images/icon-cart.svg"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"

export default {
  component: Icon,
  title: 'Components/Atoms/Icon',
  tags: ['autodocs'],
  args: {
    altText: "Cart Icon",
    icon: CartIcon1
  },
  argTypes: {
    icon: {
      control: {
        type: "file",
        accept: [".svg"],
        defaultValue: CartIcon1
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const icon = canvas.getByAltText(/cart icon/i)
    await expect(icon).toBeInTheDocument()
  }
}

export const CartIcon = {
  args: {
    altText: "Cart Icon",
    icon: CartIcon1,
  }
}