import CardImage from "../CardImage/CardImage"
import "./CardImageSection.css"

export default function CardImageSection({imgUrlMobile, imgUrlDesktop, altText}) {
  return (
    <div className="card__img__container">
      <CardImage 
        imgUrlMobile={imgUrlMobile}
        imgUrlDesktop={imgUrlDesktop}
        altText={altText}
      />
    </div>
  )
}
