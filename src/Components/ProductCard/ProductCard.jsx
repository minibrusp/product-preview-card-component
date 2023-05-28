import CardImageSection from "../CardImageSection/CardImageSection"
import ContentSection from "../ContentSection/ContentSection"
import "./ProductCard.css"

export default function ProductCard({ 
  productName,
  productType,
  text,
  currentPrice,
  originalPrice,
  imgUrlMobile,
  imgUrlDesktop,
 }) {
  return (
    <div className="card">
      <CardImageSection
        imgUrlMobile={imgUrlMobile}
        imgUrlDesktop={imgUrlDesktop}
      />
      <ContentSection
        productName={productName}
        productType={productType}
        text={text}
        currentPrice={currentPrice}
        originalPrice={originalPrice}
      />
    </div>
  )
}
