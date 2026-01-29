import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {AdminGET, AdminPOST} from "../API/api";


import styles from "./add-doc-style.module.css";


import { useParams } from 'react-router-dom';

const Page = (props) => {
	let textAreaRef = useRef(null)	

	return (
		
		<div style={{
			width: "100%",
			display:"flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			paddingBottom: 15,
		}}>

			<img src={props.src} style={{maxWidth: "95%"}}/>
			
			<details style={{width:"95%", marginTop:15}}>
				<summary>Показать расшифровку</summary>
				<textarea ref={props.textAreaRef} style={{
					width: "100%", 
					aspectRatio:"1/0.5", 
					resize:'vertical',

					border: "1px solid #525252",
					borderRadius: 5,
					background: "#121212",
					color: "white",

					boxSizing: "border-box",
					padding: 15,
				
				}}
				
				onChange={(e)=>{ props.handleChange(props.id, e.target.value) }}
	
				>{props.text}</textarea>
			</details>

		</div>

	)

}


const EditDocument = () => {
	let {id} = useParams();
	

	const nameRef = useRef();
	const emailRef = useRef(); 
	const statusRef = useRef();

	const [oldData, setOldData] = useState(null);
	const [docsBlock, setDocsBlock] = useState([]);


	const [changedTXT, setChangedTXT] = useState({});
	const textAreaChange = (id, value) => {
		let mp = changedTXT;
		mp[id] = value;

		setChangedTXT(mp);
	}

	useEffect(()=>{
		
		async function func(){
			let data = await AdminGET("/get-document?id=" + id);
			
			console.log("DATA:", data);
			console.log(nameRef.current);


			nameRef.current.value = data.document.name;	
			emailRef.current.value = data.document.email;
			statusRef.current.value = data.document.status;

			//building docs block
			let docs_block = [];

			data.pages.map((item) => {
				docs_block.push(
					<Page 
						handleChange={textAreaChange} 
						src={item.image_publick_url} text={item.file_text} 
						id={item.id}
					/>
				)
			
			})
			
			setDocsBlock(docs_block);
			setOldData(data.document);
			
		};

		func();

	}, [])


	const saveInfo = async () => {
		let newData = {
			"name": nameRef.current.value,
			"email": emailRef.current.value,
			"status": statusRef.current.value,
		}

		let to_update = {};

		for ( let key in newData ){
			
			if (newData[key] != oldData[key]) {
				to_update[key] = newData[key];
			}

		}
	

		let res = await AdminPOST("/update-document", JSON.stringify({
			id: id,
			document_info: JSON.stringify(to_update),
			pages_text: JSON.stringify(changedTXT)
		}))

		console.log("RESULT: ", res);
		
		window.location.pathname='/adminpanel';
	}


	return (
    <div className={styles.form}>
        <h2 style={{marginTop:15}}>Добавление документа</h2> 
    

        <div className={styles.container}> 
            
            <div className={styles.info_block}>
                
                <div className={styles.input}>
                    <p>Название документа</p>
                    <input id="name" ref={nameRef} />
                </div>
             
               
                <div className={styles.input}>
                    <p>Адрес электронной почты</p>
                    <input id="email" placeholder="" ref={emailRef} />
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


				<div style={{
					width:"95%",
					display:"flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
					{docsBlock}

				</div>

                <button id='submit' className={styles.submit_button} onClick={()=>{saveInfo()}}>Сохранить</button>    		
				<button id='discard' className={styles.submit_button} onClick={()=>{
					window.location.pathname="/adminpanel";
				}} style={{
					background: "transparent",
					color: "white",
					marginTop:10,
				}} >Отменить</button>


            </div>

        </div>
    </div>
  );


}

export default EditDocument;
