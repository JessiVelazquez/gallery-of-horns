import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {
    let data = require('./assets/data.json');

    return (
      <div>
        <main>
          {data.map((item) => {
            return <HornedBeast
              title={item.title}
              description={item.description}
              url={item.image_url}
              alt={item.keyword}
              horns={item.horns}
            />;
          })}
        </main>
      </div>
    );
  }
}




export default Main;
