import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import data from './assets/data.json';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: data
    };
  }

  render() {

    return (
      <div className="beast-container">
        <CardDeck>
          {data.map((item, index) => (
            <main key={index}>
              <HornedBeast
                title={item.title}
                description={item.description}
                url={item.image_url}
                alt={item.keyword}
                horns={item.horns}/>
            </main>
          ))}
        </CardDeck>
      </div>
    );
  }
}


export default Main;
