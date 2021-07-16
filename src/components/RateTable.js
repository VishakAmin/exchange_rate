import { useSelector } from "react-redux";
import { getUserName } from "../store/user";


export function RateTable({ currencyData, amount }) {
  const name = useSelector(getUserName);
  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(currencyData).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Made by {name}</td>
        </tr>
      </tfoot>
    </table>
  );
}
