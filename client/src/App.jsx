// // import './App.css';
// // import { Outlet } from 'react-router-dom';
// // import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// // const client = new ApolloClient({
// //   uri: '/graphql',
// //   cache: new InMemoryCache(),
// // });

// // function App() {
// //   return (
// //     <ApolloProvider client={client}>
// //       <div className="flex-column justify-center align-center min-100-vh bg-primary">
// //         <Outlet />
// //       </div>
// //     </ApolloProvider>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Login from './components/LoginForm';
// import Signup from './components/SignupForm';
// // import Home from './Home';
// // import Profile from './Profile'; will fix these when my files are redone
// function App() {
//   const isLoggedIn = true;

//   return (
//     <Router>
//       <Switch>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/signup">
//           <Signup />
//         </Route>
//         <Route path="/home">
//           {isLoggedIn ? <Home /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/profile">
//           {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
//         </Route>
//         {/* Add more routes as needed */}
//         <Route path="/">
//           <Redirect to="/home" />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
///change to allow for apollo client, adjust other folders to allow for apollo as well 

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './components/LoginForm/LoginForm'
import Search from './pages/SearchPlantForm';
import Profile from './components/Profile/ProfilePage';

import { client } from './client';

function App() {
  // const isLoggedIn = true; ---? do we need this

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Navigation onNavigationClick={handleNavigationClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;