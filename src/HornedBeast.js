import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div id="beasts">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.url} alt={this.props.alt} title={this.props.title}/>
      </div>
    );
  }
}

export default HornedBeast;
