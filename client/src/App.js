import React from 'react';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Main />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
