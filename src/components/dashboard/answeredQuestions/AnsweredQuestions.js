import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";
const AnsweredQuestions = (props) => {


    return (
        <div>
            <Card className="p-0 " >
                <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">{props.Q.author} Asks</CardTitle>
                <div className="p-2">
                    <div className="d-flex">
                        <img className="border border-success rounded-circle p-1" style={{ width: 100, height: 100 }} alt="avatar" src={props.avatar} />
                        {/* <div className="imgAvatar border-success d-flex flex-column justify-content-center rounded-circle border">
                            {props.Q.author}
                        </div> */}
                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">
                                <div>{props.Q.optionOne.text}</div>
                                <div>{props.Q.optionTwo.text}</div>
                            </div>
                            <Link className="btn px-5"
                                to={{ pathname: "/questions/" + props.Q.id, state: { questionProps: props.Q } }}
                            //to="/questionPoll"
                            >
                                View Poll
                            </Link>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default AnsweredQuestions;