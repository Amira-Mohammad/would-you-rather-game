import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Home from './components/home/Home';
import NewQuestion from './components/newQuestion/NewQuestion';
import LeaderBoard from './components/leaderBoard/LeaderBoard';
import QuestionDetails from './components/dashboard/questionDetails/QuestionDetails';
import QuestionPoll from './components/dashboard/questionPoll/QuestionPoll';
import { connect } from 'react-redux';
import NotFound from './components/notFound/NotFound';

function App(props) {


  const PrivateRoute = ({ component: Component, ...rest }) => {
    const user =
      //props.users.loginUser &&
      props.users.loginUser || false;
    return <Route {...rest} render={(props) => (
      !user
        ? <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
        //handleChildFunc={handleChildFunc} 
        :
        <Component {...props} user={user} />
    )}
    />
  }
  return (

    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/add" component={NewQuestion} />
          <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
          <PrivateRoute exact path="/questions/:id" component={QuestionDetails} />
          <PrivateRoute exact path="/questionPoll" component={QuestionPoll} />
          <PrivateRoute exact path='/dashboard' component={Dashboard}
          // handleChildFunc={this.handleChildFunc}
          />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>


    </div>

  );
}

function mapStateToProps({ users }) {

  return {
    users,
  }
}

export default connect(mapStateToProps)(App);
