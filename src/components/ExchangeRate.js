import {useEffect,useDispatch } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import {useSelector} from "react-redux";
import { getRatesAmount, getRatesCurrencyCode, getCurrencyData, supportedCurrencies, changeCurrencyCode } from "../store/rates";



export function ExchangeRate() {
  // const [amount, setAmount] = useState("1.50");
  // const [currencyCode, setCurrencyCode] = useState("USD");
  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  const dispatch = useDispatch()
  const amount = useSelector(getRatesAmount);
  const currencyCode = useSelector(getRatesCurrencyCode);
  const currencyData = useSelector(getCurrencyData);


  // fetch the exchange rates first times..

  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode))
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
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
