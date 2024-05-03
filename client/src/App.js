import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

import Nav from './components/Nav';
import Login from './pages/Login';
import ImageFinder from './pages/ImageFinder';
import Signup from './pages/Signup';
import Plant from './pages/Plant'
import Home from './pages/Home'

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
          <Route path='/ImageFinder/:username' element={<ImageFinder />} />
          <Route path='/ImageFinder' element={<ImageFinder />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/plant/:id' element={<Plant />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
