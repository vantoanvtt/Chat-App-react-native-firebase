import {USER_LOGIN, USER_LOGOUT, FETCH_FRIENDS_REQUEST} from '../actions/type';

const defaultState = {
    currUser: {},
    friends: []
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case USER_LOGIN: {
            state = {...state, currUser: action.payload}
            return state;
        }
        case FETCH_FRIENDS_REQUEST: {
            state = {...state, friends: [...action.payload]}
            return state;
        }
        default: {
            return state;
        }
    }
}

export default reducer;
