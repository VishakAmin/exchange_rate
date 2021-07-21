import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import {useSelector} from "react-redux";
import { getRatesAmount, getRatesCurrencyCode, getCurrencyData, changeCurrencyCode } from "../store/rates";



export function ExchangeRate() {

  const amount = useSelector(getRatesAmount);
  const currencyCode = useSelector(getRatesCurrencyCode);
  const currencyData = useSelector(getCurrencyData);


  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount}  />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
