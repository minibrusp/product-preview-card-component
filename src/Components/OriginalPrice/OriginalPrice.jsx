import "./OriginalPrice.css"

export default function OriginalPrice({ originalPrice }) {
  return (
    <p className="card__amount__original__price --not-current">$ {originalPrice} </p>
  )
}
