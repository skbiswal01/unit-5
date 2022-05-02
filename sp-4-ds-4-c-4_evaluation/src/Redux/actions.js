// action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT"
// Action Creators
export function login(data) {
   
    return {
       
      type: 'LOGIN',
      payload: data,
    }
  }
   
 export function logout(data) {
    
    return {
      type: 'LOGOUT',
      payload: data,
    }
  }
