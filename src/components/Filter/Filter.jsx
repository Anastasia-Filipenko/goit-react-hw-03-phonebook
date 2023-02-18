import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange, value }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="" className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        value={value}
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
