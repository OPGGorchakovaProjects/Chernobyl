import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { lazy } from 'react';
import imagesData from '../subComponents/Docs/images';
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons';
import '../subComponents/Docs/style.css';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const Documents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAdditionalImageIndex, setSelectedAdditionalImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
            setIsTablet(window.innerWidth <= 1100);
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
        <div className="main-doc">
            <PowerButton />
            <div className='doc-container'>
                <div className='doc-title'>
                    <h2>Секреты Припяти: <br /> Чернобыльские документы</h2>
                </div>
                <div className="photo-grid">
                    {imagesData.map((image, index) => (
                        <div className="container-doc" key={index}>
                            <div>
                                <h1>{image.title}</h1>
                                <p>{image.description}</p>
                            </div>
                            <div className="image-height">
                                <div className="image-container">
                                    <img src={image.source} alt="error" />
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
                                display: 'flex',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)'
                            },
                            content: {
                                width: isMobile ? '90%' : isTablet ? '60%' : '40%',
                                height: isMobile ? '70%' : '90%',
                                margin: 'auto',
                                backgroundColor: '#333333',
                                borderRadius: '12px',
                                borderColor: 'transparent',
                                justifySelf: 'center',
                                alignContent: 'center'
                            }
                        }}
                        contentLabel="Модальное окно"
                    >
                        <button onClick={handleCloseModal} className='close-button'>Закрыть</button>
                        <div className='modalInside'>
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 1 && (
                                <button onClick={slideLeft} className='button-slide'>
                                    <ChevronBackOutline
                                        color={'#fff'}
                                        height="2.5vw"
                                        width="2.5vw"
                                    />
                                </button>
                            )}
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 0 && (
                                <img src={selectedImage.additionalImages[selectedAdditionalImageIndex]} alt="error" />
                            )}
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 1 && (
                                <button onClick={slideRight} className='button-slide'>
                                    <ChevronForwardOutline
                                        color={'#fff'}
                                        height="2.5vw"
                                        width="2.5vw"
                                    />
                                </button>
                            )}
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Documents;