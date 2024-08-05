// src/js/store/flux.js

const BASE_URL = 'https://playground.4geeks.com/apis/fake/contact/';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch(BASE_URL);
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error('Error fetching contacts:', error);
                }
            },
            addContact: async (contact) => {
                try {
                    const response = await fetch(BASE_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        getActions().fetchContacts();
                    }
                } catch (error) {
                    console.error('Error adding contact:', error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`${BASE_URL}${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (response.ok) {
                        getActions().fetchContacts();
                    }
                } catch (error) {
                    console.error('Error updating contact:', error);
                }
            },
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`${BASE_URL}${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        getActions().fetchContacts();
                    }
                } catch (error) {
                    console.error('Error deleting contact:', error);
                }
            }
        }
    };
};

export default getState;
