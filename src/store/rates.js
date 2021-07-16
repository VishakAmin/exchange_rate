import { getExchangeRates } from "../api";


const initialState = {
  amount : "1.15",
  currencyCode : "USD",
  currencyData :{USD :1.0}
};  


export function ratesReducer(state = initialState, action) {
  switch(action.type){
    case "ratesamountChanged":
      return {...state, amount : action.payload}
    case 'ratescurrencyCodePicker': 
      return {...state, currencyCode:action.payload}
    case 'rates/ratesRecieved':
      return {...state, currencyData:action.payload}
    
    default:
      return state;
  }


}



//selector

export const getRatesAmount = (state) => state.rates.amount;
export const getRatesCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;


//action types
export const RATES_AMOUNT_CHANGED = "ratesamountChanged";
export const RATES_CURRENCY_CODE_PICKER = "ratescurrencyCodePicker";

//actions creators
export  const changeAmount = (amount) => ({type: RATES_AMOUNT_CHANGED, payload: amount});

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];


export function changeCurrencyCode(currencyCode)  {
   return function changeCurrencyCodeThunk (dispatch) {
   dispatch({
    type: RATES_CURRENCY_CODE_PICKER,
    payload: currencyCode
  });
    getExchangeRates(currencyCode, supportedCurrencies).then(rates =>
     dispatch({type:'rates/ratesRecieved', payload: rates}));

    }
}