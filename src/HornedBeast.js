import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


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
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              ❤️{this.state.numberOfLikes}
            </Card.Text>
            <Card.Img
              onClick={likeImage}
              src={this.props.url}
              alt={this.props.alt}
              title={this.props.title} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
