import { number } from "prop-types"
import AmountSection from "./AmountSection"

export default {
  component: AmountSection,
  title: 'Components/Molecules/AmountSection',
  tags: ['autodocs'],
  args: {
    currentPrice: "149.99", 
    originalPrice: "169.99"
  },
  argTypes: {
    currentPrice: {control: {type: "number", defaultValue: "149.99" }},
    originalPrice: {control: {type: "number", defaultValue: "169.99" }}
  }
}

export const CardAmountSection = {}