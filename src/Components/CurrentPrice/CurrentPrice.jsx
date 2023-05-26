import "./CurrentPrice.css"

export default function CurrentPrice({ currentPrice}) {
  return (
    <p className="card__amount__current__price">$ {currentPrice} </p>
  )
}
