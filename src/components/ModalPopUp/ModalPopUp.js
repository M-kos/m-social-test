import React, { useState } from 'react';

import ListPopupItem from '../List-popup-item/List-popup-item'
import './ModalPopUp.scss';

import { Modal } from 'react-bootstrap';

function ModalPopUp(props) {
  const [peoples, setPeoples] = useState([
    {
      id: 0,
      imgSrc: "https://via.placeholder.com/150",
      name: "Milan Gladis (Owner)",
      email: "hello@milangladis.com",
      spent: "Spent 3h 34mins",
      actionBtn: "Transfer ownership"
    },
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/150",
      name: "Emma Watson (Owner)",
      email: "emma@watson.com",
      spent: "Spent 3h 34mins",
      actionBtn: "Revoke Access"
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/150",
      name: "Public link",
      email: "",
      spent: "",
      actionBtn: "Revoke link"
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/150",
      name: "Milan Gladis (Owner)",
      email: "hello@milangladis.com",
      spent: "Spent 3h 34mins",
      actionBtn: "Transfer ownership"
    },
    {
      id: 4,
      imgSrc: "https://via.placeholder.com/150",
      name: "Emma Watson (Owner)",
      email: "emma@watson.com",
      spent: "Spent 3h 34mins",
      actionBtn: "Revoke Access"
    },
    {
      id: 5,
      imgSrc: "https://via.placeholder.com/150",
      name: "Public link",
      email: "",
      spent: "",
      actionBtn: "Revoke link"
    },
  ]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h2 className="popup-title">Invite people to project</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="form-popup">
          <div className="input-select-popup">
            <input type="text" placeholder="Name or email" className="input-popup" />
            <select className="select-popup">
              <option selected value="edit">Can edit</option>
              <option value="some">Some</option>
              <option value="any">Any</option>
            </select>
          </div>
          <button className="btn-popup btn-popup--body">Invite 1 person</button>
        </div>
        <div className="list-popup">
          {peoples.map(people => {
            return <ListPopupItem key={people.id} people={people}/>
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p className="footer-text" variant="primary">Or share this Project with Public link</p>
        <select className="select-popup select-popup--footer">
          <option selected value="edit">Can edit</option>
          <option value="some">Some</option>
          <option value="any">Any</option>
        </select>
        <button className="btn-popup btn-popup--footer">Copy link</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPopUp;