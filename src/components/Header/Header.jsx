import { useSelector } from "react-redux";
import { getCurrencies } from "../../redux/selectors";
import css from "./Header.module.css";

export const Header = () => {
  const currencies = useSelector(getCurrencies);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <ul className={css.currencyList}>
          <li className={css.currencyItem}>
            <p className={css.currencyName}>USD</p>
            <p className={css.currencyValue}>
              {currencies.find((el) => el.cc === "USD")?.rate}
            </p>
          </li>
          <li className={css.currencyItem}>
            <p className={css.currencyName}>EUR</p>
            <p className={css.currencyValue}>
              {currencies.find((el) => el.cc === "EUR")?.rate}
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
};
