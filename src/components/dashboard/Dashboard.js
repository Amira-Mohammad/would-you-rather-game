import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import UnAnsweredQuestions from './unAnsweredQuestions/UnAnsweredQuestions';
import AnsweredQuestions from './answeredQuestions/AnsweredQuestions';
import NavBar from '../navBar/NavBar';
import { connect } from 'react-redux'
import { handleInitialData } from '../../Actions/index'
import './Dashboard.scss'

const Dashboard = (props) => {






    // const questionsForLoop = Object.entries(props.questions);
    // const usersForLoop = Object.entries(props.users.users);

    // const questions_UnAnswered = [];
    // const questions_Answered = [];



    // let currentLogin = {}
    // usersForLoop.forEach((userFormLoop) => {

    //     if (userFormLoop[0] === props.users.loginUser) {
    //         currentLogin = userFormLoop
    //     }

    // })



    // questionsForLoop.forEach((questionFormLoop) => {
    //     if (currentLogin[1].answers.hasOwnProperty(questionFormLoop)) {

    //         //     if (currentLogin[1].answers.includes(questionFormLoop)[0]) {
    //         questions_Answered.push(questionFormLoop[1])

    //        

    //     } else {
    //         questions_UnAnswered.push(questionFormLoop[1])
    //     }

    // })

    // function currentLoginUser(logInUser) {
    //     return logInUser.id === props.users.loginUser;
    // }


    // const result = Object.keys(props.users.users).find((logInUser) => logInUser.id === props.users.loginUser);

    const [currentLoginUser, setCurrentLoginUser] = useState([]);
    const [unAnsweredQuestion, setUnAnsweredQuestion] = useState([]);
    const [AnsweredQuestion, setAnsweredQuestion] = useState([]);

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

        // props.handleInitialData()
        // if (!props.question) {


        //     setQuestion(props.questions)

        // }


    }, []);

    useEffect(() => {
        const unAnswered_Question = [];
        const answered_Question = [];
        if (currentLoginUser.length !== 0 && currentLoginUser !== null) {
            Object.entries(props.questions).forEach((questionFormLoop) => {

                if (currentLoginUser[1].answers.hasOwnProperty(questionFormLoop[0])) {
                    answered_Question.push(questionFormLoop[1])

                } else {
                    unAnswered_Question.push(questionFormLoop[1])
                }

            }

            )



            setUnAnsweredQuestion(unAnswered_Question);
            setAnsweredQuestion(answered_Question)
        }

    }, [props.questions, currentLoginUser])



    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>

            <NavBar />

            <div className="container col-6 col-center mt-5 border p-2">

                <Nav className="justify-content-center" tabs>
                    <NavItem className="w-50">
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            UnAnswered Questions

                        </NavLink>
                    </NavItem>
                    <NavItem className="w-50 border-bottom">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Answered Questions
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row className="mt-4">


                            <Col sm="12">

                                {unAnsweredQuestion.sort((a, b) => b.timestamp - a.timestamp)
                                    .map((question_UnAnswered) => {
                                        return (
                                            <UnAnsweredQuestions
                                                key={question_UnAnswered.id}
                                                avatar={currentLoginUser[1].avatarURL}
                                                Q={question_UnAnswered} />

                                        )
                                    })

                                }
                            </Col>
                            {/* <Col sm="12">

                                {Object.keys(props.questions).sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)
                                    .map((Q) => {
                                        return (<UnAnsweredQuestions
                                            avatar={Object.entries(currentLogin)[1][1].avatarURL}
                                            key={Q} usersData={props.users} Q={props.questions[Q]} />

                                        )
                                    })}
                            </Col> */}
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="mt-4">

                            <Col sm="12">
                                {AnsweredQuestion.sort((a, b) => b.timestamp - a.timestamp).map((question_Answered) => {
                                    return (<AnsweredQuestions
                                        key={question_Answered.id}
                                        avatar={currentLoginUser[1].avatarURL}
                                        Q={question_Answered}
                                    />

                                    )
                                })
                                }

                            </Col>

                            {/* <Col sm="12">
                                {Object.keys(props.questions).map((Q) => {
                                    return (<AnsweredQuestions key={Q} Q={props.questions[Q]} />

                                    )
                                })
                                }

                            </Col> */}
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </>
    );
};

function mapStateToProps({ questions, users }) {

    return {
        questions,
        users

    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleInitialData: () => {
            dispatch(handleInitialData())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);