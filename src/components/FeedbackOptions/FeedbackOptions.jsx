import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleMouseDown = event => {
    event.preventDefault();
    const active = document.activeElement;
    if (active instanceof HTMLElement) {
      active.blur();
    }
  };

  return (
    <ul className={css['btn-list']}>
      {options.map(option => (
        <li className="btn-item" key={option}>
          <button
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            onMouseDown={handleMouseDown}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
