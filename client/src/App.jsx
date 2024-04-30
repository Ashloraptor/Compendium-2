// import './App.css';
// import { Outlet } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div className="flex-column justify-center align-center min-100-vh bg-primary">
//         <Outlet />
//       </div>
//     </ApolloProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Profile from './Profile';

function App() {
  const isLoggedIn = true; // Replace with your logic to check if user is logged in

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/profile">
          {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
        </Route>
        {/* Add more routes as needed */}
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;