import { useState } from 'react';
import Modal from 'react-modal';
import { button } from '../Styles';
import { UserList } from '../UserList/UserList';
import { buttonGray, modalStyles } from '../Styles/Style';

export const UserListModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <button onClick={openModal} style={button}>Preview User List</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <form>
                        <UserList />
                    </form>
                    <button onClick={closeModal} style={buttonGray}>close</button>
                </div>
            </Modal>
        </>
    );
};

