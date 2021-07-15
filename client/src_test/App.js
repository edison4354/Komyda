import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Users from "../src/components/recordList";

const App = () => {
  return (
    <div>
      <Route path="/users" component={Users}/>
    </div>
  );
};

export default App;