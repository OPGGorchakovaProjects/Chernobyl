import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import imagesData_file from './images.js';
import styles from './style.module.css';
import "../../App.css";

import {docsSearch, GET} from "../API/api";

function BuildSearchedContent(data, setContent, openModal) {
	console.log("BUILKDING...")
	
	if (data == -1 || data == null) {
		setContent(null);
		return;
	}	

	let newContent = [];

	data.map((image, index) => {
		newContent.push((
		    <div className={styles.box} key={index}>
                <div className={styles.textbox}>
                    <h1>{image.title}</h1>
                    <p>{image.description}</p>
                </div>
                <div className={styles.imageHeight}>
                    <div className={styles.imageContainer}>
                        <img src={image.source} alt="error" />
                        <Button onClick={() => {}} className={styles.modalButton}>
                            Открыть
                        </Button>
                    </div>
                </div>
            </div>
	
	))});


	setContent(newContent);

}

function InputListener(setImagesData, clearSearch){
	console.log("INPUT LISTENER IS ACTIVE");

	let input = document.querySelector("#search");
	
	let timeoutId = 0;
	
	input.addEventListener('input', async function() {
		clearTimeout(timeoutId);
		

		timeoutId = setTimeout(async () => {

			console.log('Выполняем поиск:', this.value);
		 	
			let data = await docsSearch(this.value);
            
            if (data == -1) { return clearSearch(); }

			setImagesData([...data]);

		}, 800);
	  });
}

const Documents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAdditionalImageIndex, setSelectedAdditionalImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

	const searchREF = useRef(null);
	const [searchedContent, setSearchedContent] = useState(null);

    const [imagesData, setImagesData] = React.useState(imagesData_file);

    const dataInitFunc = async () => {
        console.log('get docs');
        let data = await GET("/get-all-documents");
        console.log(data);

        setImagesData(data);
        console.log('set images');
    }


	useEffect(()=>{
		if (searchREF.current) {
			InputListener(setImagesData, dataInitFunc);	
		}

        dataInitFunc();
	}, []);

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
        const newIndex = (selectedAdditionalImageIndex - 1 + selectedImage.additionalimages.length) % selectedImage.additionalimages.length;
        setSelectedAdditionalImageIndex(newIndex);
    };

    const slideRight = () => {
        const newIndex = (selectedAdditionalImageIndex + 1) % selectedImage.additionalimages.length;
        setSelectedAdditionalImageIndex(newIndex);
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Секреты Припяти: <br /> Чернобыльские документы</h2>
                </div>
                <div className={styles.photoGrid}>
                    <p style={{fontSize:"1.1rem", color:"white"}}>
                        * Если вы распологаете информацией о человеке, имеющем отношение к ЧАЭС, вы можете  сообщить нам с помощью <a style={{color:"#00B2FF"}} href="/addDocuments">специальной формы</a>
                    </p>
                    <input className={styles.SearchInput} ref={searchREF} id="search" placeholder="Поиск документов"/>

					{ searchedContent || (imagesData.map((image, index) => (
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
                    
					)))}
                
				</div>
                
				{isModalOpen && selectedImage && selectedImage.additionalimages && (
                    <Modal
						id="MyModal"
                        isOpen={isModalOpen}
                        onRequestClose={handleCloseModal}
                        style={{
                            overlay: {
								left:0,
								right:0,
								inset: "0 !important",
								margin: "0 auto",
								display: 'flex',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)', 
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
                            {selectedImage.additionalimages && selectedImage.additionalimages.length > 1 && (
                                <button onClick={slideLeft} className={styles.buttonSlide}>
                                    {leftArrow}
                                </button>
                            )}
                            {selectedImage.additionalimages && selectedImage.additionalimages.length > 0 && (
                                <img src={selectedImage.additionalimages[selectedAdditionalImageIndex]} alt="error" />
                            )}
                            {selectedImage.additionalimages && selectedImage.additionalimages.length > 1 && (
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
