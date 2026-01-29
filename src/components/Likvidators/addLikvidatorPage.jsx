import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import POST from "../API/api";

import styles from "./addLikvidator-style.module.css";


function sendData(){
	let name = document.querySelector("#name").value;
	let story = document.querySelector("#story").value;
	let email = document.querySelector("#email").value;

	let file = document.querySelector("#file").files[0];
	
	if (name.length == 0) { return alert("Поле ФИО не может быть пустым."); }
	if (story.length == 0) { return alert("Поле ИСТОРИЯ не может быть пустым."); }
	if (email.length != 0 && !email.includes("@")) { return alert("Указан не валидный адресс электронной почты.") } 

	if (!file) { return alert("Необходимо загрузить изображение") }

	let form = new FormData();

	form.append("name", name);
	form.append("story", story);
	form.append("email", email || "");
	form.append("file", file);

	let res = POST("/add-person", form);
		
	if (res){
		alert("Благодорим за внесение вклада в наш архив!");
		window.location.pathname="/blog";
	}

}

function addLikvidatorPage() {

  return (
    <div className={styles.form}>
        <h2 style={{marginTop:15}}>Добавление личности</h2> 
    

        <div className={styles.container}>
           
            <div className={styles.image_block}>
                <img id='preview' src="" 
                    style={{width:"100%", height:"auto%", maxHeight:"100%", display:"none", borderRadius:5}} 
                    onClick={()=>{
                        document.querySelector("#file").click();
                    }} />
                
                <p id='txt' style={{
                    color:"#00B2FF",
                    textDecoration:"underline",
                    cursor: "pointer",
                    userSelect:"none"

                }} onClick={()=>{
                    document.querySelector("#file").click();
                }} >Выберите изображение</p>
                
                <input style={{display:"none"}} 
                        type="file" 
                        accept="image/*" 
                        id='file'
                        onChange={(e) => {
                            const fileInput = e.target;
                            let txt = document.querySelector('#txt');
                            let img = document.querySelector("#preview");

                            const file = fileInput.files[0];

                            if (file) {
                                const reader = new FileReader();

                                reader.onload = (e) => {
                                    img.src = e.target.result;
                                    img.style.display = 'flex';

                                    txt.style.display="none";
                                }

                                reader.readAsDataURL(file);

                            }
                        }}
                />


            </div>

            
            <div className={styles.info_block}>
                
                <div className={styles.input}>
                    <p>ФИО</p>
                    <input id="name" />
                </div>
             
                
                <div className={styles.input}>
                    <p>История</p>
                    <textarea id="story" placeholder="Напишите небольшую биографю личности" ></textarea>
                </div>
                
                <div className={styles.input}>
                    <p>Адрес электронной почты</p>
                    <input id="email" placeholder="" />
                </div>

                <button id='submit' className={styles.submit_button} onClick={sendData}>ОТПРАВИТЬ</button>
                 
            </div>

        </div>
    </div>
  );
}

export default addLikvidatorPage;
