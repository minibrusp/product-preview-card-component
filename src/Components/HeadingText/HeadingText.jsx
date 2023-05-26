import "./HeadingText.css"

function DynamicHeadingTag({level, text, customClass }) {
  const DynamicTag = `h${level}`
  return <DynamicTag className={`heading-tag ${customClass}`}>{text}</DynamicTag>
}

export default function HeadingText({ level, text, customClass }) {

  return (
    <>
      <DynamicHeadingTag level={level} text={text} customClass={customClass} />
    </>
  )
}
