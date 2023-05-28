import ProductCard from "../../Components/ProductCard/ProductCard"
import "./Home.css"

export default function Home({ 
  productName,
  productType,
  text,
  currentPrice,
  originalPrice,
  imgUrlMobile,
  imgUrlDesktop, 
}) {
  return (
    <section className="products">
      <ProductCard 
        productName={productName}
        productType={productType}
        text={text}
        currentPrice={currentPrice}
        originalPrice={originalPrice}
        imgUrlMobile={imgUrlMobile}
        imgUrlDesktop={imgUrlDesktop}
      />
    </section>
  )
}
