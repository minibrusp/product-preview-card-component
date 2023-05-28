import OriginalPrice from "./OriginalPrice"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"



export default {
  component: OriginalPrice,
  title: 'Components/Atoms/OriginalPrice',
  tags: ['autodocs'],
  args: {
    originalPrice: "169.99"
  },
  argTypes: {
    originalPrice: {
      control: {
        type: "number",
        defaultValue: 169.99
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const originalPrice = canvas.getByText(/169.99/i)
    await expect(originalPrice).toBeInTheDocument()
    await expect(originalPrice).toHaveClass("--not-current")
  }
}

export const originalPrice = {}