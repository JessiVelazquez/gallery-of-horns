import React from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Main />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
