import React from 'react';
import Modal from 'react-bootstrap/Modal';



class selectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Body>
            <img width={450} alt={this.props.favoriteBeast.keyword} src={this.props.favoriteBeast.image_url}></img>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default selectedBeast;
