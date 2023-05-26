import PropTypes from 'prop-types';
import './Button.css'
import Icon from '../IconComponent/Icon';

export default function Button({text, icon}) {
  console.log(icon)
  return (
    <button className="card__btn">
      { icon && (
        <span>
          <Icon icon={icon} altText="Cart Icon" />
        </span>
      ) }
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any
  ])
}
