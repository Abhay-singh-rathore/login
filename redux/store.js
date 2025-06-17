// src/redux/store.js

import { createStore } from 'redux';
import userReducer from './reducer'; // Adjust the path as necessary

const store = createStore(userReducer);

export default store;
