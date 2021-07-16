
const initialState = {
  name: "Vishak",
  loggedIn: false,
};  


export function userReducer(state = initialState, action) {
  return state

}

//selectors

export const getUserName = state => state.user.name;