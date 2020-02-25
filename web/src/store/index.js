import { createStore } from 'redux';

const INITIAL_STATE = {
    user: localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : null,
}

function user(state = INITIAL_STATE, action) {
    const response = action.user;
    switch (action.type) {
        case 'LOGIN_USER':
            localStorage.setItem("user", JSON.stringify(response));
            return { ...state, user: response };
        default:
            return state;
    }
}

const store = createStore(user);

export default store;