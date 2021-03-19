import React from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import data from './assets/data.json';
import SelectedBeast from './selectedBeast';
import FormData from './form.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: data,
      filteredData: null,
      // numberOfHorns: [],
      displayModal: false,
      favoriteBeast: {},
    };
  }

  displayAsModal = (index) => {
    this.setState({favoriteBeast: this.state.filteredData[index],
      displayModal: true});
  }

  handleClose = () => {
    this.setState({displayModal: false});
  }


  handleInput = (e) => {this.setState({ filteredData: this.state.gallery.filter(value => {
    if (e === 'all') {
      return value;
    } else {
      return value.horns === Number(e);}
  })
  });
  };
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <FormData
            handleInput={this.handleInput}
          />
          <Main
            cards={(this.state.filteredData) !== null ? (this.state.filteredData) : (this.state.gallery)}
            displayAsModal={this.displayAsModal}
          />
          <SelectedBeast
            show={this.state.displayModal}
            handleClose={this.handleClose}
            favoriteBeast={this.state.favoriteBeast}/>
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
