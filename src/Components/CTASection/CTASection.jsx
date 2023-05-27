import Button from "../Button/Button"
import CTAIcon from '../../assets/images/icon-cart.svg';
import "./CTASection.css"

export default function CTASection() {
  return (
    <div className="card__cta">
      <Button
        icon={CTAIcon}
        text="Add to Cart"
      />
    </div>
  )
}
