import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import POST from "../API/api";

import styles from "./style.module.css";



async function TryLogin(){
	let email = document.querySelector("#email").value;
	let password = document.querySelector("#password").value;
	
	let dt = new FormData();
	dt.append("email", email);
	dt.append("password", password);

	let res = await POST("/login", dt);
	if (res.error) { return; }

	localStorage['jwt'] = res['data'];
	window.location.pathname="/adminpanel";
}

function AdminPanelLogin() {

  return (
    <div className={styles.login_form}>
        <h2 style={{marginTop:15}}>Админ панель</h2>

			<div style={{marginTop: 25}} className={styles.login_input}>
				<p>Email</p>
				<input id="email" />	
	  		</div>
			
			<div className={styles.login_input}>
				<p>Password</p>
				<input id="password" type="password" placeholder="" />
			</div>

			<button style={{width:"90%", marginTop:10}}
	  				className={styles.submit_button}
	  				onClick={TryLogin}	
	  		>Войти</button>	
    
    </div>
  );
}

export default AdminPanelLogin;
