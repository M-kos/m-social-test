import React from 'react';

import { Modal, Button } from 'react-bootstrap';

function ModalPopUp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h2>Invite people to project</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="input-select">
          <input type="text" placeholder="Name or email" className="inputName" />
          <select className="selectEdit">
            <option selected value="edit">Can edit</option>
            <option value="soma">Some</option>
            <option value="any">Any</option>
          </select>
        </div>
        <button>Invite 1 person</button>
        <div>
          <div>
            <img />
            <h5>Milan Gladis (Owner)</h5>
            <p>hello@milangladis.com</p>
          </div>
          <span>Spent 3h 34mins</span>
          <button>Transfer ownership</button>
          <div>
            <img />
            <h5>Emma Watson (Owner)</h5>
            <p>emma@watson.com</p>
          </div>
          <span>Spent 3h 34mins</span>
          <button>Revoke Access</button>
          <div>
            <img />
            <h5>Public link</h5>
            <p>http://lor.em/l296gdk6</p>
          </div>
          <button>Revoke link</button>
          <div>
            <img />
            <h5>Milan Gladis (Owner)</h5>
            <p>hello@milangladis.com</p>
          </div>
          <span>Spent 3h 34mins</span>
          <button>Transfer ownership</button>
          <div>
            <img />
            <h5>Emma Watson (Owner)</h5>
            <p>emma@watson.com</p>
          </div>
          <span>Spent 3h 34mins</span>
          <button>Revoke Access</button>
          <div>
            <img />
            <h5>Public link</h5>
            <p>http://lor.em/l296gdk6</p>
          </div>
          <button>Revoke link</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p variant="primary">Or share this Project with Public link</p>
        <select className="selectEdit">
          <option selected value="edit">Can edit</option>
          <option value="soma">Some</option>
          <option value="any">Any</option>
        </select>
        <Button variant="success" className="redButton" onClick={() => { }}>Copy link</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPopUp;