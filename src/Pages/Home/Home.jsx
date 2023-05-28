import ProductCard from "../../Components/ProductCard/ProductCard"
import "./Home.css"

export default function Home({ product }) {
  return (
    <section className="products">
      <ProductCard product={product} />
    </section>
  )
}
