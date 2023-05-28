import Paragraph from "./Paragraph"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"

export default {
  component: Paragraph,
  title: 'Components/Atoms/Paragraph',
  tags: ['autodocs'],
  args: {
    text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
  },
  argTypes: {
    text: {
      control: "text",
      defaultValue: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const paragraph = canvas.getByText(/Perfumer-Creator/i)
    await expect(paragraph).toBeInTheDocument()
    await expect(paragraph.textContent).toMatch("A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.")
  }
}

export const primary = {}
