import HeadingSection from "../HeadingSection/HeadingSection"
import ParagraphSection from "../ParagraphSection/ParagraphSection"
import AmountSection from "../AmountSection/AmountSection"
import CTASection from "../CTASection/CTASection"
import "./ContentSection.css"

export default function ContentSection({ 
  productName,
  productType,
  text,
  currentPrice,
  originalPrice,
 }) {
  return (
    <div className="card__content">
      <HeadingSection 
        productName={productName}
        productType={productType}
      />
      <ParagraphSection 
        text={text} 
      />
      <AmountSection 
        currentPrice={currentPrice}
        originalPrice={originalPrice}
      />
      <CTASection />
    </div>
  )
}
