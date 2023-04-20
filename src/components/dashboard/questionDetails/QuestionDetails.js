import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";
import NavBar from '../../navBar/NavBar';
import './questionDetails.scss'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../../../Actions'


class QuestionDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };


    render() {
        if (!this.props.location.state) {
            // return <Redirect to="/dashboard" />
            return (
                <div>
                    <h1>404</h1>
                    <p>The page not found</p>
                </div>

            )
        }
        const questionProps_Data = this.props.location.state.questionProps
        const submitVote = (e) => {
            e.preventDefault()
            const { dispatch } = this.props
            dispatch(handleAnswerQuestion(this.props.users.loginUser, questionProps_Data.id, this.state.exampleRadios, this.props.users.loginUser))
            //this.props.history.push('/questionPoll')



        }
        return (
            <>
                <NavBar />
                <div className="container col-6 col-center">

                    <Card className="p-0 m-2" >
                        <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">
                            {/* {props.Q.author}  */}
                            {questionProps_Data.author} Asks </CardTitle>
                        <div className="p-2">
                            <div className="d-flex">
                                <div className="w-25 border-end border-success d-flex flex-column justify-content-center">{questionProps_Data.author}</div>
                                <div className="w-75">
                                    <div className="fw-bold bgLightColor">Would You Rather</div>
                                    <div className="QuestionTitle my-2">
                                    </div>

                                    <div>
                                        <input className="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios1"
                                            value='optionOne'
                                            onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            {this.props.location.state.questionProps.optionOne?.text}
                                        </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios2"
                                            value='optionTwo'
                                            onChange={this.handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            {this.props.location.state.questionProps.optionTwo?.text}
                                        </label>
                                    </div>


                                    {/* <button onClick={submitVote} className="btn px-5">Submit vote</button> */}

                                    <button htmlFor="questionPoll" onClick={submitVote} className="btn px-5">
                                        <Link id="questionPoll" className="btn px-5"
                                            to={{
                                                pathname: "/questionPoll"
                                                , state: { questionProps_Data: questionProps_Data }
                                            }}

                                        >
                                            Submit vote
                                        </Link>
                                    </button>

                                </div>
                            </div>

                        </div>

                    </Card>
                </div>
            </>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(QuestionDetails);