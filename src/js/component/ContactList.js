// src/js/components/ContactList.js

import React from 'react';
import ContactCard from './ContactCard'; // Asegúrate de que la ruta es correcta

const ContactList = ({ contacts }) => {
    return (
        <div className="container mt-3">
            {contacts.map((contact, index) => (
                <ContactCard 
                    key={index} 
                    contact={contact} 
                    onEdit={() => console.log('Edit contact', contact)} 
                    onDelete={() => console.log('Delete contact', contact)} 
                />
            ))}
        </div>
    );
};

export default ContactList;
