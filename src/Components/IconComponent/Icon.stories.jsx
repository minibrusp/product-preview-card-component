import Icon from "./Icon"
import CartIcon1 from "../../assets/images/icon-cart.svg"

export default {
  component: Icon,
  title: 'Components/Atoms/Icon',
  tags: ['autodocs'],
  args: {
    altText: "Cart Icon",
    icon: CartIcon1
  },
  argTypes: {
    icon: {
      control: {
        type: "file",
        accept: [".svg"],
        defaultValue: CartIcon1
      }
    }
  }
}

export const CartIcon = {
  args: {
    altText: "Cart Icon",
    icon: CartIcon1,
  }
}