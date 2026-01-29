import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import imagesData from './images.js';
import "../../App.css";

import POST from "../API/api";
import styles from "./add-doc-style.module.css";


function filesInputChange(filesArray, setFilesArray, newFiles) {
	let currentFiles = filesArray.map((item) => { return item.name} );
	
	let newArray = [...filesArray];
	let oldLength = newArray.length;

	[...newFiles].forEach((item) => {
		if ( !currentFiles.includes(item.name) ) {
			
			newArray.push(item)

		}
		
	})

	if (newArray.length != oldLength) {
		setFilesArray((filesArray) => newArray);
		console.log("FILES:", filesArray);
	
	}
}

const Document = (props) => {
	
	let [src, setSRC] = useState();

	React.useEffect(()=>{
		console.log("INIT")
		const reader = new FileReader();	

		reader.onload = (e) => {
			setSRC(e.target.result);
		}

		reader.readAsDataURL(props.file);
		
	}, [])

	return (
		<div className={styles.docBox}>
			<img src="/cancel.png" className={styles.cancelButton} onClick={props.onErase}/>	
			<img className={styles.DOC} src={src} />

		</div>
	)

}

function showFiles(setContent, filesArray, setFilesArray){
	let content = [];

	filesArray.forEach((item) => {
		content.push(<Document key={item.name} file={item} onErase={()=>{ 
			eraseFile(item.name, filesArray, setFilesArray); 
		}} />)	
	})

	console.log("FilesToSHOW:", content);

	setContent(content);
}

function eraseFile(fileName, filesArray, setFilesArray) {
	filesArray.forEach((item, id) => {
		
		if (item.name == fileName) {
			console.log("ERASE FROM INDEX: ", id);
			
			let newArr = [...filesArray];
			newArr.splice(id, 1);
			setFilesArray(newArr);
			
			return;
		}
		
	})	
}

async function sendForm(filesArray){
	let status = document.querySelector("#status");

	let name = document.querySelector("#name").value;
	let email = document.querySelector("#email").value;

	let files = filesArray;

	if (name.length == 0) { return alert("Название документа не может быть пустым"); }
	if (files.length == 0) { return alert("Выберите файлы для отправки"); }


	let picsForm = new FormData();
	files.forEach((item) => { picsForm.append("files", item) })
	
	status.innerText = "Обработка изображений ...";

	let pics_data = await POST("/process-docs-pics", picsForm);
	if (!pics_data) { return; }

	status.innerText = "Отправка данных ..."
		
	pics_data = pics_data['data'];
	
	picsForm.append("name", name);
	picsForm.append("email", email);
	picsForm.append("pics_text", JSON.stringify(pics_data));

	let res = await POST("/add-docs", picsForm);
	if (!res) { status.innerText = 'Ошибка сервера'; }
	else {
		status.innerText = 'Отправлено!';
		alert("Благодорим за внесения влкада в архив!");
		
		setTimeout(()=>{window.location.pathname="/"}, 400);
	}

}

const AddDocuments = () => {
  	let [filesArray, setFilesArray] = useState([]);
	let [filesContent, setFilesContent] = useState([]);

	useEffect(()=>{
		showFiles(setFilesContent, filesArray, setFilesArray);
	}, [filesArray])


	return (
    <div className={styles.form}>
        <h2 style={{marginTop:15}}>Добавление документа</h2> 
    

        <div className={styles.container}> 
            
            <div className={styles.info_block}>
                
                <div className={styles.input}>
                    <p>Название документа</p>
                    <input id="name" />
                </div>
             
               	<div className={styles.filesInputContainer}>
	  				<div style={{width:"100%", display:"flex", justifyContent: "space-between"}}>
	  					<p>Загрузите документы</p>
	  					<button className={styles.addDocumentButton} onClick={()=>{
							document.querySelector("#filesInput").click();
						}}> Добавить файл</button>
	  				</div>

	  				<div className={styles.filesBlock}>
	  					{[...filesContent]}
					</div>

					<input 
						type="file" 
						multiple accept="image/*" 
						id='filesInput' 
						style={{display:"none"}} 
						onChange={(e)=>{ 
							filesInputChange(filesArray, setFilesArray, e.target.files); 
						}}
					/>

	  			</div>
                
                <div className={styles.input}>
                    <p>Адрес электронной почты</p>
                    <input id="email" placeholder="" />
                </div>

                <button id='submit' className={styles.submit_button} onClick={()=>{sendForm(filesArray)}}>ОТПРАВИТЬ</button>
        		
				<p id='status' style={{color: "white", textAlign:"center", marginTop:10}}></p>

            </div>

        </div>
    </div>
  );

};

export default AddDocuments;
