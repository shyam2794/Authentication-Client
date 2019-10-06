import React from 'react';
import { BrowserRouter , Switch, Route } from "react-router-dom";

import LoginPageContainer from "../src/login-page/LoginPageContainer";

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/" component={LoginPageContainer}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
