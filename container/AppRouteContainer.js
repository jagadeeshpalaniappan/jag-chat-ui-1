import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

// import LoginPage from "./pages/auth/LoginPage";
// import SignUpPage from "./pages/auth/SignUpPage";

import ChatPage from "../pages/ChatPage";
import MeetingPage from "../pages/MeetingPage";

const AppRouter = () => {
  // let history = useHistory();  // TODO: not working
  return (
    
      <Switch>
        <Redirect exact from="/" to="/chat" />
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route path="/meet">
          <MeetingPage />
        </Route>
        <Redirect to="/notfound" />
      </Switch>
  );
};

export default AppRouter;
