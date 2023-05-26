import "./OriginalPrice.css"

export default function OriginalPrice({ originalPrice }) {
  return (
    <p className="card__amount__original__price">$ {originalPrice} </p>
  )
}
