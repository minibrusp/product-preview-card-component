import "./CardImage.css"

export default function CardImage({imgUrlMobile, imgUrlDesktop, altText}) {
  return (
    <picture className="card__img__img">
      <source media="(max-width:649px)" srcSet={imgUrlMobile} alt={altText} />
      <source media="(min-width:650px)" srcSet={imgUrlDesktop} alt={altText} />
      <img className="card__img__img" src={imgUrlMobile} alt={altText} />
    </picture>
  )
}
