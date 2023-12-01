import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { getCurrencies } from "../../redux/selectors";
import css from "./CurrencyExchange.module.css";

export const CurrencyExchange = ({ handleInput, handleSelect, inputValue }) => {
  const currencies = useSelector(getCurrencies);

  return (
    <div className={css.convertTable}>
      <input type="number" value={inputValue} onChange={handleInput} />
      <select onChange={handleSelect}>
        <option disabled selected value>
          Оберіть валюту
        </option>
        <option value="UAH" data-rate={1}>
          Гривня
        </option>
        {currencies.map((el) => {
          return (
            <option key={el.r030} value={el.cc} data-rate={el.rate}>
              {el.txt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

CurrencyExchange.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
