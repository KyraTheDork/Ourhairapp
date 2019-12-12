import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
//import Client from "./components/Cust_DashBoard/client";
import { AuthContext } from "./components/auth/Auth";
// import Stylist_Quiz_List from "./components/Stylist_DashBoard/notification";
import List from "./components/consultation_form/cons_list";
// import firedatabase from "./components/auth/base";
const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {!!currentUser ? (
              <>
                <li>
                  <Link to="/">DashBoard</Link>
                </li>
                <li>
                  <Link to="/quiz">Quiz</Link>
                </li>
              </>
            ) : (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Members Login</Link>
                  </li>
                </>
              )}
          </ul>
          <li>
            <Link to="/stylist">Stylist</Link>
          </li>
        </nav>
        {/* {!!currentUser && <Route exact path="/profile" component={Client} />} */}
        {!!currentUser && <Route exact path="/quiz" component={List} />}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        
      </div>
      {/* <List /> */}
    </Router>
  );
};
export default App;
