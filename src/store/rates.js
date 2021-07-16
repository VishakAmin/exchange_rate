
const initialState = {
  amount : "1.15",
  currencyCode : "USD"
};  


export function ratesReducer(state = initialState, action) {
  switch(action.type){
    case "ratesamountChanged":
      return {...state, amount : action.payload}
    case 'ratescurrencyCodePicker': 
      return {...state, currencyCode:action.payload}
    default:
      return state;
  }


}



//selector

export const getRatesAmount = (state) => state.rates.amount;
export const getRatesCurrencyCode = (state) => state.rates.currencyCode;


//action types
export const RATES_AMOUNT_CHANGED = "ratesamountChanged";
export const RATES_CURRENCY_CODE_PICKER = "ratescurrencyCodePicker";

//actions creators
export  const changeAmount = (amount) => ({type: RATES_AMOUNT_CHANGED, payload: amount});
export const changeCurrencyCode = (currencyCode) => ({type: RATES_CURRENCY_CODE_PICKER, payload: currencyCode});