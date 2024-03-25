import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { lazy } from 'react';
import imagesData from '../subComponents/Docs/images';
import '../subComponents/Docs/style.css';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const leftarrow = '<';
const rightarrow = '>';

const Documents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAdditionalImageIndex, setSelectedAdditionalImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
            setIsTablet(window.innerWidth <= 900);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        <div className="body">
            <main className="main">
                <h2 className="h2">Секреты Припяти: <br /> Чернобыльские документы</h2>
                <PowerButton />
                <div className="photo-grid">
                    {imagesData.map((image, index) => (
                        <div className="container" key={index}>
                            <div className='text-container'>
                                <h1 className="h1">{image.title}</h1>
                                <p className="p">{image.description}</p>
                            </div>
                            <div className="image-container-first">
                                <div className="image-container">
                                    <img className="img" src={image.source} alt="error" />
                                    <Button onClick={() => handleOpenModal(image)} className="modal-button">
                                        Открыть
                                    </Button>
                                </div>
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
                                width: isMobile ? '90%' : isTablet ? '60%' : '40%',
                                height: isMobile ? '70%' : '90%',
                                margin: 'auto',
                                backgroundColor: '#333333',
                                borderRadius: '12px',
                                borderColor: 'transparent',
                                justifyItems: 'center'
                            }
                        }}
                        contentLabel="Модальное окно"
                    >
                        <button onClick={handleCloseModal} className='close-button'>Закрыть</button>
                        <div className='modalInside'>
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 1 && (
                                <button onClick={slideLeft} className='button-slide'>{leftarrow}</button>
                            )}
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 0 && (
                                <img id="img" src={selectedImage.additionalImages[selectedAdditionalImageIndex]} alt="error" className='image-modal-container' />
                            )}
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 1 && (
                                <button onClick={slideRight} className='button-slide'>{rightarrow}</button>
                            )}
                        </div>
                    </Modal>
                )}
            </main>
        </div>
    );
};

export default Documents;