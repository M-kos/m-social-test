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
          <Modal.Title id="contained-modal-title-vcenter">
            Invite people to project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p variant="primary">Or share this Project with Public link</p>
          <Button variant="success" className="redButton" onClick={() => {}}>Copy link</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalPopUp;