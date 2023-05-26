import OriginalPrice from "./OriginalPrice"



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
  }
}

export const originalPrice = {}