import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { button } from '../Styles';
import { UserList } from '../UserList/UserList';
import { buttonGray } from '../Styles/Style';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export const UserListModal = () => {
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'gray';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <button onClick={openModal} style={button}>Open User Detail</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>List of Users</h2>
                    <form>
                        <UserList />
                    </form>
                    <button onClick={closeModal} style={buttonGray}>close</button>
                </div>
            </Modal>
        </>
    );
};

