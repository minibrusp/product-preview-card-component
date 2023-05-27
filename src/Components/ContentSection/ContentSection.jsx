import HeadingSection from "../HeadingSection/HeadingSection"
import ParagraphSection from "../ParagraphSection/ParagraphSection"
import AmountSection from "../AmountSection/AmountSection"
import CTASection from "../CTASection/CTASection"
import "./ContentSection.css"

export default function ContentSection({ product }) {
  return (
    <div className="card__content">
      <HeadingSection 
        productName={product.productName}
        productType={product.productType}
      />
      <ParagraphSection 
        text={product.text} 
      />
      <AmountSection 
        currentPrice={product.currentPrice}
        originalPrice={product.originalPrice}
      />
      <CTASection />
    </div>
  )
}
