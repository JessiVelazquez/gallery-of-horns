import React from 'react';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
    };
  }


  render() {
    const likeImage = () => {
      this.setState({numberOfLikes: this.state.numberOfLikes + 1});
    };
    console.log('likes', this.likeImage);
    return (
      <div id="className">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <h2>❤️{this.state.numberOfLikes}</h2>
        <img
          onClick={likeImage}
          src={this.props.url}
          alt={this.props.alt}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default HornedBeast;
