import HeadingSection from "./HeadingSection"


export default {
  component: HeadingSection,
  title: 'Components/Molecules/HeadingSection',
  tags: ['autodocs'],
  args: {
    productName: "Gabrielle Essence Eau De Parfum",
    productType: "Perfume"
  },
  argTypes: {
    productName: { control: "text" },
    productType: { control: "text" },
  }
}

export const CardHeading = {}

