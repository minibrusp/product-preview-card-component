import CurrentPrice from "./CurrentPrice"



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
  }
}

export const currentPrice = {}