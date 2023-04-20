import React, { useState, useEffect } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { ProgressBar, Badge } from 'react-bootstrap'
import NavBar from '../../navBar/NavBar';
import { connect } from 'react-redux';


const QuestionPoll = (props) => {
    const questionProps_Data = props.location.state.questionProps_Data




    const { author, optionOne, optionTwo } = questionProps_Data
    // const { author, optionOne, optionTwo } = props

    const [currentLoginUser, setCurrentLoginUser] = useState([]);
    useEffect(() => {


        let currentLogin = {}
        Object.entries(props.users.users).forEach((userFormLoop) => {
            if (userFormLoop[0] === props.users.loginUser) {
                currentLogin = userFormLoop
                return
            }
        }
        )
        setCurrentLoginUser(currentLogin)



    }, []);

    let answerMarkOp1 = questionProps_Data ? questionProps_Data.optionOne.votes.includes(props.users.loginUser) : false
    let answerMarkOp2 = questionProps_Data ? questionProps_Data.optionTwo.votes.includes(props.users.loginUser) : false

    return (
        <>
            <NavBar />
            <div className="col-6  col-center">
                <Card className="p-0" >
                    <CardTitle className="bg-light fw-bold text-start p-2 ">{author} Asks</CardTitle>
                    <div className="p-2">
                        <div className="d-flex justify-content-center">
                            {/* <div className="imgAvatar border-success d-flex flex-column justify-content-center rounded-circle border">

                            </div> */}
                            <div className="w-75">
                                <div className="fw-bold bgLightColor">Would You Rather</div>
                                <div className="QuestionTitle my-2">
                                    <div className="border p-2 rounded my-2">
                                        <div >
                                            {answerMarkOp1 ? (
                                                <Badge className="bg-warning" pill variant="warning">
                                                    Your Vote
                                                </Badge>
                                            ) : ' '}
                                        </div>
                                        Would you rather   {optionOne.text}
                                        <ProgressBar now={optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100}
                                            label={`${optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100}%`} />
                                    </div>
                                    <div className="border p-2 rounded">
                                        <div>
                                            {answerMarkOp2 ? (
                                                <Badge className="bg-warning" pill variant="warning">
                                                    Your Vote
                                                </Badge>
                                            ) : ' '}
                                        </div>
                                        Would you rather  {optionTwo.text}
                                        <ProgressBar now={optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100}
                                            label={`${optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100}%`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </Card>
            </div>
        </>
    );
};


function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(QuestionPoll);

