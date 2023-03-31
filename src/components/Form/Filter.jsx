import PropTypes from "prop-types";
import css from "components/Form/Form.module.css";

const Filter = ({ value, onChangeHandler }) => {
  return (
    <label>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default Filter;
