import CardImageSection from "../CardImageSection/CardImageSection"
import ContentSection from "../ContentSection/ContentSection"
import "./ProductCard.css"

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <CardImageSection 
        imgUrlMobile={product.imgUrlMobile}
        imgUrlDesktop={product.imgUrlDesktop} 
      />
      <ContentSection
        product={product}
      />
    </div>
  )
}
