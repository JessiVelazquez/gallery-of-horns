import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';



class FormData extends React.Component {

  render() {

    return (
      <>
        <Dropdown onSelect={this.props.handleInput}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select by Number of Horns
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" eventKey="all">All</Dropdown.Item>
            <Dropdown.Item href="#/action-2" eventKey="1">1</Dropdown.Item>
            <Dropdown.Item href="#/action-3" eventKey="2">2</Dropdown.Item>
            <Dropdown.Item href="#/action-4" eventKey="3">3</Dropdown.Item>
            <Dropdown.Item href="#/action-5" eventKey="100">Very Horny</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    )
  }
}

export default FormData;
