import HeadingText from "./HeadingText"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"


export default {
  component: HeadingText,
  title: 'Components/Atoms/HeadingText',
  tags: ['autodocs'],
  args: {
    level: "1",
    text: "Gabrielle Essence Eau De Parfum"
  },
  argTypes: {
    level: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6",]
    }
  }
}

export const Heading1 = {
  args: {
    level: "1",
    text: "Gabrielle Essence Eau De Parfum"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const Header = canvas.getByRole("heading")
    const NameHeading = canvas.getByText(/Essence Eau De Parfum/i)

    await expect(Header).toBeInTheDocument()
    await expect(NameHeading).toBeInTheDocument()
  }
}

export const Heading2 = {
  args: {
    level: "2",
    text: "Perfume"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const ProductTypeHeading = canvas.getByRole("heading")
    const TypeHeading = canvas.getByText(/perfume/i)

    await expect(ProductTypeHeading).toBeInTheDocument()
    await expect(TypeHeading).toBeInTheDocument()
  }
}
