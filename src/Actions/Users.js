export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_LOGIN_USER = 'SET_LOGIN_USER';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }

}

export function setLoginUser(loginUser) {
    return {
        type: SET_LOGIN_USER,
        loginUser
    }


}

export function saveUserAnswer(user, qid, answer) {
    return {
        type: SAVE_USER_ANSWER,
        user,
        qid,
        answer
    }
}