import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../Actions";
import Navbar from "../navBar/NavBar";
import "./NewQuestion.css";

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstOption: "",
      SecondOption: "",
    };
    this.handleChangeOption = this.handleChangeOption.bind(this);
  }

  handleChangeOption = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      ...this.state,
      [name]: value,
    }));
  };
  handleSubmitOption = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { dispatch } = this.props;
    const { FirstOption, SecondOption } = this.state;

    dispatch(
      handleAddQuestion(FirstOption, SecondOption, this.props.users.loginUser)
    );
    this.setState(() => ({
      FirstOption: "",
      SecondOption: "",
    }));

    history.push("/dashboard");
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <Card className="p-0  col-6  col-center ">
          <CardTitle className="border-bottom text-body text-center fw-bold  p-2 ">
            <h4>Create New Question</h4>
          </CardTitle>
          <div className="p-2">
            <form onSubmit={this.handleSubmitOption}>
              <div className="card-body d-flex flex-column">
                <div className="fw-bold bgLightColor">Would You Rather</div>
                <input
                  placeholder="Enter Option One Text Here"
                  name="FirstOption"
                  type="text"
                  className="form-control my-2"
                  value={this.state.FirstOption}
                  //onChange={(e) => handleChangeOption(e.target.value)}
                  onChange={this.handleChangeOption}
                  required
                />
                <div className="my-2">OR</div>
                <input
                  placeholder="Enter Option Two Text Here"
                  name="SecondOption"
                  type="text"
                  className="form-control my-2"
                  value={this.state.SecondOption}
                  //  onChange={(e) => handleChangeOption(e.target.value)}
                  onChange={this.handleChangeOption}
                  required
                />
                <button type="submit" className="btn px-5 my-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}
export default connect(mapStateToProps)(NewQuestion);
