// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
<<<<<<< HEAD
import SingleEntry from "./pages/SingleEntry"
import Header from './components/Header';
// import Footer from './components/Footer';
import Profile from './pages/Profile';
=======
//import Journal from "./pages/Journal"
import Header from './components/Header';
import Footer from './components/Footer';
import NewJournalEntry from './components/NewJournalEntry';

>>>>>>> 779aee55b10cd1266e580172e30ca272b40d86c6

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
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/myJournals" 
                element={<Profile />} 
              />
              <Route
                path="/journal"
                element = {<SingleEntry/>}
              />
            </Routes>
          </div>
        </div>
      </Router>
      <NewJournalEntry />
    </ApolloProvider>
  );
}

export default App;

































// import logo from './logo.svg';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
