import Paragraph from "./Paragraph"

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
  }
}

export const primary = {}
