import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import CustomLink from '@/common/components/CustomLink/components';

const ListPostMetaComponent = ({ postSlug, userName }) => {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		<>
			<CustomLink onClick={handleShow} href={`#`} className="btn btn-primary text-white fw-bold btn-sm me-2">
				<i className="ion-edit" /> Approve
			</CustomLink>
			<CustomLink href={`/u/${userName}/${postSlug}/delete`} className="btn btn-outline-danger btn-sm me-2">
				<i className="ion-edit" /> Reject
			</CustomLink>
			<CustomLink href={`/u/${userName}/${postSlug}/edit`} className="btn btn-outline-dark btn-sm">
				<i className="ion-edit" /> Dispute
			</CustomLink>
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Approve Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Main reason</Form.Label>
              <Form.Control
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="I verify this data by..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
		</>
	);
};

export default ListPostMetaComponent;
