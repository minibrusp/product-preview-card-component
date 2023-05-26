import Button from "./Button";
import CartIcon from "../../assets/images/icon-cart.svg"

export default {
  component: Button,
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
  args: {
    text: "Hello World"
  },
}

export const Primary = {
  args: {
    text: "Add to Cart",
    icon: CartIcon
  },
  argTypes: {
    icon: {
      control: {
        type: "file",
        accept: [".svg"],
        defaultValue: CartIcon
      }
    }
  }
}