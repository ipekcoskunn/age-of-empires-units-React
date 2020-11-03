import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import './App.css';

import SessionContext from './contexts/SessionContext';




function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [ucase, setUcase] = useState([]);
  return (
    <SessionContext.Provider 
    value={{
      isAuthenticated,
      setAuthenticated,
      ucase,
      setUcase,
    }}
    >
    <Container> 
      <Header/>
      <Content/>
      <Footer/>
    </Container>
    </SessionContext.Provider>
  );
}

export default App;
