import { useEffect, useState } from "react";

import { CurrencyExchange } from "../CurrencyExchange/CurrencyExchange";

import css from "./Convert.module.css";

export const Convert = () => {
  const [leftCurrencyValue, setLeftCurrencyValue] = useState("");
  const [rightCurrencyValue, setRightCurrencyValue] = useState("");
  const [leftCurrencyRate, setLeftCurrencyRate] = useState("");
  const [rightCurrencyRate, setRightCurrencyRate] = useState("");
  const [shouldCalculate, setShouldCalculate] = useState(true);

  const handleLeftInputChange = (e) => {
    const { value } = e.target;
    setLeftCurrencyValue(value);
    if (value === "") {
      setRightCurrencyValue(Number(value).toFixed(2));
    }
    if (rightCurrencyValue || leftCurrencyValue) {
      setRightCurrencyValue("");
    }
    setShouldCalculate(true);
  };

  const handleRightInputChange = (e) => {
    const { value } = e.target;
    setRightCurrencyValue(value);
    if (!leftCurrencyRate || !rightCurrencyRate) {
      setLeftCurrencyValue("");
    } else {
      setLeftCurrencyValue(
        ((rightCurrencyRate / leftCurrencyRate) * value).toFixed(2)
      );
    }
    setShouldCalculate(false);
  };

  const handleLeftSelect = (e) => {
    const { options, selectedIndex } = e.target;
    const currentRate = options[selectedIndex].getAttribute("data-rate");

    setLeftCurrencyRate(currentRate);
    setShouldCalculate(true);
  };

  const handleRightSelect = (e) => {
    const { options, selectedIndex } = e.target;
    const currentRate = options[selectedIndex].getAttribute("data-rate");

    setRightCurrencyRate(currentRate);
    setShouldCalculate(true);
  };

  useEffect(() => {
    if (
      shouldCalculate &&
      rightCurrencyRate &&
      leftCurrencyRate &&
      leftCurrencyValue
    ) {
      setRightCurrencyValue(
        ((leftCurrencyRate / rightCurrencyRate) * leftCurrencyValue).toFixed(2)
      );
    }
  }, [leftCurrencyValue, rightCurrencyRate, leftCurrencyRate]);

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <CurrencyExchange
            handleInput={handleLeftInputChange}
            handleSelect={handleLeftSelect}
            inputValue={leftCurrencyValue}
          />

          <CurrencyExchange
            handleInput={handleRightInputChange}
            handleSelect={handleRightSelect}
            inputValue={rightCurrencyValue}
          />
        </div>
      </div>
    </>
  );
};
