import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {


  render() {

    return (
      <div className="beast-container">
        <CardDeck>
          {this.props.cards.map((item, index) => (
            <main key={index}>
              <HornedBeast
                index={index}
                title={item.title}
                description={item.description}
                url={item.image_url}
                alt={item.keyword}
                horns={item.horns}
                displayAsModal={this.props.displayAsModal}/>
            </main>
          ))}
        </CardDeck>
      </div>
    );
  }
}


export default Main;
