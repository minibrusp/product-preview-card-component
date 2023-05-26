import Paragraph from "../Paragraph/Paragraph"

export default function ParagraphSection({ text }) {
  return (
    <div className="card__paragraph">
      <Paragraph text={text} />
    </div>
  )
}
