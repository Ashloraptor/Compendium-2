// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Navigation from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import Login from './components/LoginForm/LoginForm';
// import Search from './pages/SearchPlantForm';
// import Profile from './components/Profile/ProfilePage';
// import './App.css';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <div className="App">
//       <ApolloProvider client={client}>
//         <Router>
//           <Header />
//           <Navigation />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/search" element={<Search />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//           <Footer />
//         </Router>
//       </ApolloProvider>
//     </div>
//   );
// }

// export default App;
//edit comments
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Login from './pages/Login';
import ImageFinder from './pages/ImageFinder';
import Signup from './pages/Signup';
import Plant from './pages/Plant';
import Home from './pages/Home';
import ProfilePage from './components/Profile/ProfilePage';
import SearchPlantForm from './pages/SearchPlantForm';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/search-plant' element={<SearchPlantForm />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/plant/:id' element={<Plant />} />
          <Route path='/image-finder/:username' element={<ImageFinder />} />
          <Route path='/image-finder' element={<ImageFinder />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;