import { LOGIN , LOGOUT } from "./actions";
const init = {
  auth : false ,

};

export const authReducer = (store = init, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...store,
                auth: true,
            };
            case LOGOUT:
              return {
                  ...store,
                  auth: false,
              };
        default:
            return store;
    }
}