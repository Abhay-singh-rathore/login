// src/redux/reducers.js

import { LOGIN } from './action';

const initialState = {
  email: '',
  password: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default userReducer;
