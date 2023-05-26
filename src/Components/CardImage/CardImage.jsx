import "./CardImage.css"

export default function CardImage({imgUrlMobile, imgUrlDesktop, altText}) {
  return (
    <div className="card__img__container">
      <picture>
        <source media="(max-width:649px)" srcSet={imgUrlMobile} />
        <source media="(min-width:650px)" srcSet={imgUrlDesktop} />
        <img className="card__img__img" src={imgUrlMobile} alt={altText} />
      </picture>
    </div>
  )
}
