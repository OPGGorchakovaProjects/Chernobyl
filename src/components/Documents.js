import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { lazy } from 'react';
import images from '../subComponents/Docs/images';
import '../subComponents/Docs/style.css';
import { ModalIcon } from './AllSvgs';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        maxWidth: '600px',
        maxHeight: '80vh',
        overflow: 'auto',
    },
};

const Documents = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <main>
            <h2>Секреты Припяти: <br /> Чернобыльские документы</h2>
            <PowerButton />
            <div className="photo-grid">
                {images.map(({ source, title, description }, index) => (
                    <div className="container" key={index}>
                        <div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        <div className="image-container">
                            <img src={source} alt="error" />
                            <Button className='modal-button' onClick={handleOpenModal}>
                                Закрыть                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Модальное окно"
            >
                <button onClick={handleCloseModal}>Закрыть</button>
                <div> </div>
                <form>
                    <button>left</button>

                    <button>right</button>
                </form>
            </Modal>
        </main>
    );
};

export default Documents;