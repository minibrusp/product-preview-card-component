import HeadingText from "../HeadingText/HeadingText"
import "./HeadingSection.css"

export default function HeadingSection({ productName, productType }) {
  return (
    <div className="card__heading">
      <HeadingText 
        level="1"
        text={productName}
      />
      <HeadingText 
        level="2"
        text={productType}
      />
    </div>
  )
}
