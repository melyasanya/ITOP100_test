import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrencies } from "../../redux/selectors";
import css from "./Convert.module.css";

export const Convert = () => {
  const currencies = useSelector(getCurrencies);
  const [leftCurrencyValue, setLeftCurrencyValue] = useState("");
  const [rightCurrencyValue, setRightCurrencyValue] = useState("");
  const [leftCurrencyRate, setLeftCurrencyRate] = useState("");
  const [rightCurrencyRate, setRightCurrencyRate] = useState("");
  const [shouldCalculate, setShouldCalculate] = useState(true);

  const handleLeftInputChange = (e) => {
    setLeftCurrencyValue(e.target.value);
    setShouldCalculate(true);
  };

  const handleRightInputValue = (e) => {
    setRightCurrencyValue(e.target.value);
    setLeftCurrencyValue(
      ((leftCurrencyRate / rightCurrencyRate) * e.target.value).toFixed(2)
    );
    setShouldCalculate(false);
  };

  const handleLeftSelect = (e) => {
    const currentRate =
      e.target.options[e.target.selectedIndex].getAttribute("data-rate");

    setLeftCurrencyRate(currentRate);
    setShouldCalculate(true);
  };

  const handleRightSelect = (e) => {
    const currentRate =
      e.target.options[e.target.selectedIndex].getAttribute("data-rate");

    setRightCurrencyRate(currentRate);
    setShouldCalculate(true);
  };

  useEffect(() => {
    if (
      shouldCalculate &&
      rightCurrencyRate &&
      leftCurrencyRate &&
      leftCurrencyValue
    )
      setRightCurrencyValue(
        ((leftCurrencyRate / rightCurrencyRate) * leftCurrencyValue).toFixed(2)
      );
  }, [leftCurrencyValue, rightCurrencyRate, leftCurrencyRate]);

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.convertTable}>
            <input
              type="number"
              value={leftCurrencyValue}
              onChange={handleLeftInputChange}
            />
            <select name="" id="" onChange={handleLeftSelect}>
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
          <div className={css.convertTable}>
            <input
              type="number"
              value={rightCurrencyValue}
              onChange={handleRightInputValue}
            />
            <select name="" id="" onChange={handleRightSelect}>
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
        </div>
      </div>
    </>
  );
};
