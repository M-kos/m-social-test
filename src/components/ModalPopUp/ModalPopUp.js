import React, { Component } from 'react';

import ListPopupItem from '../List-popup-item/List-popup-item'
import './ModalPopUp.scss';

import { Modal } from 'react-bootstrap';

import photo1 from './Rectangle 28.10.png';
import photo2 from './Rectangle 28.11.png';
import icon from './Group.svg';

class ModalPopUp extends Component {
  state = {
    peoples: [
      {
        id: 0,
        imgSrc: photo1,
        name: "Milan Gladis (Owner)",
        email: "hello@milangladis.com",
        spent: "Spent 3h 34mins",
        actionBtn: "Transfer ownership"
      },
      {
        id: 1,
        imgSrc: photo2,
        name: "Emma Watson (Owner)",
        email: "emma@watson.com",
        spent: "Spent 3h 34mins",
        actionBtn: "Revoke Access"
      },
      {
        id: 2,
        imgSrc: icon,
        name: "Public link",
        email: "",
        spent: "",
        actionBtn: "Revoke link"
      },
      {
        id: 3,
        imgSrc: photo1,
        name: "Milan Gladis (Owner)",
        email: "hello@milangladis.com",
        spent: "Spent 3h 34mins",
        actionBtn: "Transfer ownership"
      },
      {
        id: 4,
        imgSrc: photo2,
        name: "Emma Watson (Owner)",
        email: "emma@watson.com",
        spent: "Spent 3h 34mins",
        actionBtn: "Revoke Access"
      },
      {
        id: 5,
        imgSrc: icon,
        name: "Public link",
        email: "",
        spent: "",
        actionBtn: "Revoke link"
      }
    ],
    inputValue: '',
    isValid: true
  };

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
      isValid: true
    });
  };

  validationInput = () => {
    const { inputValue } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!inputValue.trim().length || !reg.test(inputValue)) {
      this.setState({
        inputValue: '',
        isValid: false
      });
    }
  };

  render() {
    const { peoples, isValid } = this.state;

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h2 className="popup-title">Invite people to project</h2>
        </Modal.Header>
        <Modal.Body>
          {(!isValid) ? <p className="warning-message">Wrong name or email</p>: null}
          <div className="form-popup">
            <div className={"input-select-popup "  + (!isValid ? 'warning' : '')}>
              <input 
                onChange={this.inputChange} 
                type="text" 
                placeholder="Name or email" 
                className="input-popup" 
              />
              <select defaultValue="edit" className="select-popup">
                <option value="edit">Can edit</option>
                <option value="some">Some</option>
                <option value="any">Any</option>
              </select>
            </div>
            <button onClick={this.validationInput} className="btn-popup btn-popup--body">Invite 1 person</button>
          </div>
          <div className="list-popup">
            {peoples.map(people => {
              return <ListPopupItem key={people.id} people={people} />
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p className="footer-text" variant="primary">Or share this Project with Public link</p>
          <select defaultValue="edit" className="select-popup select-popup--footer">
            <option value="edit">Can edit</option>
            <option value="some">Some</option>
            <option value="any">Any</option>
          </select>
          <button className="btn-popup btn-popup--footer">Copy link</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalPopUp;