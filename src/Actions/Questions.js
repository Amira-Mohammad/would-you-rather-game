export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_Q_ANSWER = 'SAVE_Q_ANSWER';


export function receiveQuestion(questions) {
    return {
        type: RECEIVE_QUESTION,
        questions
    }

}

export function addQuestion(question) {

    return {
        type: ADD_QUESTION,
        question
    }

}

export function saveQuestionAnswer(authedUser, qid, answer, loginUser) {

    return {
        type: SAVE_Q_ANSWER,
        authedUser,
        qid,
        answer,
        loginUser
    }

}


