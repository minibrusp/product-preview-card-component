import CurrentPrice from "./CurrentPrice"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"


export default {
  component: CurrentPrice,
  title: 'Components/Atoms/CurrentPrice',
  tags: ['autodocs'],
  args: {
    currentPrice: "149.99"
  },
  argTypes: {
    currentPrice: {
      control: {
        type: "number",
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const price = canvas.getByText(/149.99/i)

    await expect(price).toBeInTheDocument()
    await expect(price).not.toHaveClass("--not-current")
  }
}

export const currentPrice = {}