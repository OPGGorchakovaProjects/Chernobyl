import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import imagesData from './images.js';
import styles from './style.module.css';

const Documents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAdditionalImageIndex, setSelectedAdditionalImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>;
    const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>;

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
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Секреты Припяти: <br /> Чернобыльские документы</h2>
                </div>
                <div className={styles.photoGrid}>
                    {imagesData.map((image, index) => (
                        <div className={styles.box} key={index}>
                            <div className={styles.textbox}>
                                <h1>{image.title}</h1>
                                <p>{image.description}</p>
                            </div>
                            <div className={styles.imageHeight}>
                                <div className={styles.imageContainer}>
                                    <img src={image.source} alt="error" />
                                    <Button onClick={() => handleOpenModal(image)} className={styles.modalButton}>
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
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                margin: 'auto',
                                left: 0,
                            },
                            content: {
                                width: isMobile ? '90%' : isTablet ? '60%' : '40%',
                                height: isMobile ? '70%' : '90%',
                                margin: 'auto',
                                backgroundColor: '#333333',
                                borderRadius: '12px',
                                borderColor: 'transparent',
                                justifySelf: 'center',
                                alignSelf: 'center',

                            }
                        }}
                        contentLabel="Модальное окно"
                    >
                        <button onClick={handleCloseModal} className={styles.closeButton}>Закрыть</button>
                        <div className={styles.modalInside}>
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 1 && (
                                <button onClick={slideLeft} className={styles.buttonSlide}>
                                    {leftArrow}
                                </button>
                            )}
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 0 && (
                                <img src={selectedImage.additionalImages[selectedAdditionalImageIndex]} alt="error" />
                            )}
                            {selectedImage.additionalImages && selectedImage.additionalImages.length > 1 && (
                                <button onClick={slideRight} className={styles.buttonSlide}>
                                    {rightArrow}
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