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
      this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
    };

    const popOut = () => {
      this.props.displayAsModal(this.props.index);
    };
   
    return (
      <div id="className">
        <Card style={{ width: '18rem' }} bg='primary' text='dark' border='light'>
          <Card.Body>
            <Card.Title onClick={likeImage}>
              {this.props.title}
            </Card.Title>
            <Card.Text onClick={likeImage}>
              {this.props.description}
            </Card.Text>
            <Card.Text onClick={likeImage}>
              ❤️{this.state.numberOfLikes}
            </Card.Text>
            <Card.Img
              onClick={popOut}
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
