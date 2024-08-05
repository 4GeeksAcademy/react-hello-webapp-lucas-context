import React, { useState } from "react";
import personaImage from "../../img/persona.png"; // Asegúrate de que esta ruta sea correcta
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal, Button, Form } from 'react-bootstrap';

const ContactCard = ({ contact }) => (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={personaImage} className="img-fluid rounded-circle" alt="persona" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <div className="row d-flex justify-content-end mb-3">
                        <div className="col-md-2 col-xs-6">
                            <button><FaPen /></button>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <button><MdDelete /></button>
                        </div>
                    </div>
                    <h5 className="card-title">{contact.full_name}</h5>
                    <div className="d-flex align-items-center">
                        <CiLocationOn className="mr-2" />
                        <p className="card-text mb-0">{contact.address}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaPhone className="mr-2" />
                        <p className="card-text mb-0">{contact.phone}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <MdEmail className="mr-2" />
                        <p className="card-text mb-0">{contact.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const contact = {
        full_name: "Lucas Caneo",
        email: "digimon@ned.ie",
        phone: "(870) 23131",
        address: "Allandale street 1213",
    };

    // Render the ContactCard component 4 times with the same contact data
    return (
        <div className="container mt-5">
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button className="btn btn-success" onClick={handleShow}>Add new Contact</Button>
                </div>
            </div>

            <div className="container border mt-3">
                {[1, 2, 3, 4].map((_, index) => (
                    <ContactCard key={index} contact={contact} />
                ))}
            </div>

            {/* Modal para añadir un nuevo contacto */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="Enter phone number" />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" />
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
                    <a href="#" onClick={handleClose}>or get back to contacts</a>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
