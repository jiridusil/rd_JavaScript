import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { button } from '../Styles';
import { UserDetail } from '../UserDetail';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
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

type Props = {
    textColor: string;
    backgroundColor: string;
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export const UserDetailModal = () => {
    // let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);
    const { textColor, backgroundColor, headerColor } = useTheme();

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = 'gray';
    // }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <button onClick={openModal} style={button}>Preview User Detail</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>User Detail page</h2> */}
                <form>
                    <div className="flex flex-direction-column justify-center items-center"
                        style={{ background: backgroundColor, padding: '10px' }}>
                        <ul role="list" className="divide-y divide-gray-500">
                            <h2 className="text-2xl font-semibold leading-6 mb-4" style={{ color: headerColor }}>User Detail</h2>

                            <li key='aaa' className="flex justify-between gap-x-6 py-4">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <Link to={`/user/1`}>
                                            <p className={`text-sm font-semibold leading-6 text-gray-900"`}>Leanne Graham</p>
                                        </Link>
                                        <p className="mt-1 truncate text-s leading-5 text-gray-500" style={{ color: textColor }}>Email: Sincere@april.biz</p>
                                        <p className="mt-1 truncate text-s leading-5 text-gray-500" style={{ color: textColor }}>Company: Romaguera-Crona</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </form>
                <button onClick={closeModal} style={buttonGray}>close</button>
            </Modal>
        </>
    );
};