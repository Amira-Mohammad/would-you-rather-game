import { getInitialData } from '../utils/api';
import { receiveUsers, saveUserAnswer } from './Users';
import { receiveQuestion } from './Questions';
import { saveQuestion, answerQuestion } from '../utils/api';
import { addQuestion, saveQuestionAnswer } from './Questions'


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestion(questions))

        })

    }
}

export function handleAnswerQuestion(authedUser, qid, answer, loginUser) {
    return (dispatch) => {

        dispatch(saveQuestionAnswer(authedUser, qid, answer, loginUser))
        dispatch(saveUserAnswer(authedUser, qid, answer))
        return answerQuestion(
            {
                authedUser,
                qid,
                answer

            }

        )
        // .then(() => {
        //     dispatch(saveQuestionAnswer({ authedUser, qid, answer }))
        // })

    }

}





export function handleAddQuestion(optionOne, optionTwo, author) {
    return (dispatch, getState) => {
        return saveQuestion(
            {
                optionOneText: optionOne,
                optionTwoText: optionTwo,
                author,
            }
            //     {
            //     optionOne,
            //     optionTwo,
            //     author
            // }
        ).then((question) => {
            dispatch(addQuestion(question))
        })

    }

}
