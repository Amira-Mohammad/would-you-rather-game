import { RECEIVE_USERS, SET_LOGIN_USER, SAVE_USER_ANSWER } from '../Actions/Users';

export default function users(state = {}, action) {

    switch (action.type) {

        case RECEIVE_USERS:
            return {
                ...state,
                users: { ...action.users }
            }
        case SET_LOGIN_USER:

            return {
                ...state,
                loginUser: action.loginUser
            }

        case SAVE_USER_ANSWER:
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.user]: {

                        ...state.users[action.user],
                        answers: {
                            ...state.users[action.user].answers,
                            [action.qid]: action.answer
                        }
                    }
                }
            }

        // return {
        //     ...state,
        //     [action.user]: {
        //         ...state[action.user],
        //         answers: {
        //             ...state.users[action.user].answers,
        //             [action.qid]: action.answer
        //         }
        //     }
        // }
        default:
            return state
    }
}