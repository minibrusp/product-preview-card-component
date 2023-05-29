import Button from "./Button";
import CartIcon from "../../assets/images/icon-cart.svg"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"

export default {
  component: Button,
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
  args: {
    text: "Hello World"
  },
}

export const Primary = {
  args: {
    text: "Add to Cart",
    icon: CartIcon
  },
  argTypes: {
    icon: {
      control: {
        type: "file",
        accept: [".svg"],
        defaultValue: CartIcon
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const addCartButton = canvas.getByRole("button", { name: /Add to Cart/i })
    const cartButtonIcon = canvas.getByAltText(/Cart Icon/i)

    await expect(addCartButton).toBeInTheDocument()
    await expect(cartButtonIcon).toBeInTheDocument()
    await expect(addCartButton).toHaveStyle("background-color: hsl(158, 36%, 37%)")
  }
}