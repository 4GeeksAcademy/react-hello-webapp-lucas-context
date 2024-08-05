// src/views/Home.js

import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Context } from '../store/appContext';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';

const Home = () => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSave = (contact) => {
        actions.addContact(contact);
        handleClose();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button className="btn btn-success" onClick={handleShow}>Add new Contact</Button>
                </div>
            </div>
            <ContactList />
            <AddContactForm show={showModal} handleClose={handleClose} onSave={handleSave} />
        </div>
    );
};

export default Home;
