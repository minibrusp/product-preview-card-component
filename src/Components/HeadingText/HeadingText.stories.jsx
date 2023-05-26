import HeadingText from "./HeadingText"


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
}

export const Heading2 = {
  args: {
    level: "2",
    text: "Perfume"
  }
}
