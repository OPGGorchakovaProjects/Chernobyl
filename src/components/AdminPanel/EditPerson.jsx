import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {AdminGET, AdminPOST} from "../API/api";

import styles from "./addLikvidator-style.module.css";

import { useParams, useNavigate } from 'react-router-dom';


const EditPerson = () => {
	let {id} = useParams();
	const navigate = useNavigate();
	

	const nameRef = useRef();
	const storyRef = useRef();
	const emailRef = useRef();
	const fileRef = useRef()
	const imageRef = useRef();
	const statusRef = useRef();

	const [oldData, setOldData] = useState(null);

	useEffect(()=>{
		
		async function func(){
			let data = await AdminGET("/get-person?id=" + id);
		
			console.log("DATA:", data);
			console.log(nameRef.current);

			nameRef.current.value = data.name;
			storyRef.current.value = data.story;
			emailRef.current.value = data.email;

			statusRef.current.value = data.status;

			imageRef.current.src = data.photo_publick_url;
				
			setOldData(data);
		}

		func();
	}, [])


	const saveInfo = async () => {
		let newData = {
			"name": nameRef.current.value,
			"story": storyRef.current.value,
			"email": emailRef.current.value,
			"status": statusRef.current.value,
		}

		let to_update = {};

		for ( let key in newData ){
			
			if (newData[key] != oldData[key]) {
				to_update[key] = newData[key];
			}

		}
	
		let res = await AdminPOST("/update-person", JSON.stringify({
			id: id,
			update: JSON.stringify(to_update)
		}))

		console.log("RESULT: ", res);
		
		navigate('/adminpanel');
	}

	return (
	
    	<div className={styles.form}>
			<h2 style={{marginTop:15}}>Редактирование личности</h2> 
		

			<div className={styles.container}>
			   
				<div className={styles.image_block}>
					<img id='preview' ref={imageRef} src="" 
						style={{width:"100%", height:"auto", maxHeight:"100%", display:"flex", borderRadius:5}} 
						onClick={()=>{
							document.querySelector("#file").click();
						}} />
					
					
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
						<input ref={nameRef} id="name" />
					</div>
				 
					
					<div className={styles.input}>
						<p>История</p>
						<textarea ref={storyRef} id="story" ></textarea>
					</div>
					
					<div className={styles.input}>
						<p>Адрес электронной почты</p>
						<input ref={emailRef} id="email" placeholder="" />
					</div>
					
					<div style={{
						display:'flex',
						flexDirection: "row",
						justifyContent:'start',
						alignItems: 'center',
						paddingBottom:15,
					}}>
						<p style={{fontSize:"1.5rem"}}>Статус: </p>
						<select ref={statusRef} style={{
							border: "1px solid #525252",
							borderRadius: 5,
							fonSize: "1.2rem",
							padding: 10,
							paddingLeft: 15,
							paddginRight: 15,

							background: "#121212",
							color:"white",
							marginLeft: 10,
				
						}}>
							<option value="to moderator">На модерации</option>
							<option value="approved">Утверждено</option>
							<option value='disapproved'> Отклонено </option>	
						</select>
					
					
					</div>

					<button id='submit' className={styles.submit_button} onClick={saveInfo} >Сохранить</button>
					<button id='discard' className={styles.submit_button} onClick={()=>{
						navigate("/adminpanel");
					}} style={{
						background: "transparent",
						color: "white",
						marginTop:10,
					}} >Отменить</button>
					 
				</div>

			</div>
		</div>
		

		

	)
}

export default EditPerson;
