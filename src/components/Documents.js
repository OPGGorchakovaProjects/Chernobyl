import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { lazy } from 'react';
import imagesData from '../subComponents/Docs/images'; // Поменяйте это на свой путь к данным изображений
import '../subComponents/Docs/style.css';

import Slider from 'react-slick';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const leftarrow = '<';
const rightarrow = '>';

const Documents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAdditionalImageIndex, setSelectedAdditionalImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (image) => {
        setSelectedImage(image);
        setSelectedAdditionalImageIndex(0);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const slideLeft = () => {
        const newIndex = (selectedAdditionalImageIndex - 1 + selectedImage.additionalImages.length) % selectedImage.additionalImages.length;
        setSelectedAdditionalImageIndex(newIndex);
    };

    const slideRight = () => {
        const newIndex = (selectedAdditionalImageIndex + 1) % selectedImage.additionalImages.length;
        setSelectedAdditionalImageIndex(newIndex);
    };

    return (
        <main>
            <h2>Секреты Припяти: <br /> Чернобыльские документы</h2>
            <PowerButton />
            <div className="photo-grid">
                {imagesData.map((image, index) => (
                    <div className="container" key={index}>
                        <div>
                            <h1>{image.title}</h1>
                            <p>{image.description}</p>
                        </div>
                        <div className="image-container">
                            <img src={image.source} alt="error" />
                            <Button onClick={() => handleOpenModal(image)} className="modal-button">
                                Открыть
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedImage && selectedImage.additionalImages && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.3)'
                        },
                        content: {
                            width: '60%',
                            height: '80%',
                            margin: 'auto',
                            backgroundColor: '#333333',
                            borderRadius: '12px',
                            borderColor: 'transparent'
                        }
                    }}
                    contentLabel="Модальное окно"
                >
                    <button onClick={handleCloseModal} className='close-button'>Закрыть</button>
                    <div className='modalInside'>
                        <button onClick={slideLeft} className='button-slide'>{leftarrow}</button>
                        {selectedImage.additionalImages && selectedImage.additionalImages.length > 0 && (
                            <img src={selectedImage.additionalImages[selectedAdditionalImageIndex]} alt="error" className='image-modal-container' />
                        )}
                        <button onClick={slideRight} className='button-slide'>{rightarrow}</button>
                    </div>
                </Modal>
            )}

        </main>
    );
};

export default Documents;
