import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";
import './UnAnsweredQuestions.css'
const UnAnsweredQuestions = (props) => {


    return (
        <div>
            <Card className="p-0 m-2" >
                <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">{props.Q.author} Asks</CardTitle>
                <div className="p-2">
                    <div className="d-flex">

                        {/* <div className="imgAvatar border-success d-flex flex-column justify-content-center rounded-circle border">
                            {props.Q.author}
                        </div> */}
                        <img className="border border-success rounded-circle p-1" style={{ width: 100, height: 100 }} alt="avatar" src={props.avatar} />
                        <div className="px-3 border-end border-success"> <span className="visually-hidden">ssssssss</span></div>

                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">


                                {/* {props.Q.id} */}
                                <div>{props.Q.optionOne?.text}</div>
                                <div>{props.Q.optionTwo?.text}</div>

                            </div>

                            <Link className="btn px-5"
                                to={{ pathname: "/questions/" + props.Q.id, state: { questionProps: props.Q } }}
                            //to={"/questionDetails/" + props.Q.id}
                            >View and Vote</Link>

                        </div>
                    </div>

                </div>

            </Card>
        </div>
    );
};

export default UnAnsweredQuestions;