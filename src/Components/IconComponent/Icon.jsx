import "./Icon.css"

export default function Icon({ icon, altText }) {
  return (
    <img className="icon" src={icon} alt={altText} />
  )
}
