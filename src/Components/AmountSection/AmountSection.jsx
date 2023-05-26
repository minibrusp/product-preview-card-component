import CurrentPrice from "../CurrentPrice/CurrentPrice"
import OriginalPrice from "../OriginalPrice/OriginalPrice"

export default function AmountSection({ currentPrice, originalPrice }) {
  return (
    <div className="card__amount">
      <CurrentPrice currentPrice={currentPrice} />
      <OriginalPrice originalPrice={originalPrice} />
    </div>
  )
}
