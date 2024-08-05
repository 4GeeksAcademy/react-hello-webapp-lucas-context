// src/js/components/AddContactForm.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddContactForm = ({ show, handleClose, onSave }) => {
    const [contact, setContact] = useState({
        full_name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(contact);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="full_name" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="phone" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddContactForm;
