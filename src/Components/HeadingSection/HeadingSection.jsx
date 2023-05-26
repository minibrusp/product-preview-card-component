import HeadingText from "../HeadingText/HeadingText"
import "./HeadingSection.css"

export default function HeadingSection() {
  return (
    <div className="card__heading">
      <HeadingText 
        level="1"
        text="Gabrielle Essence Eau De Parfum"
      />
      <HeadingText 
        level="2"
        text="Perfume"
      />
    </div>
  )
}
