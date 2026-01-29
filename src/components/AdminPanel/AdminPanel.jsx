import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {AdminGET} from "../API/api";

import styles from "./style.module.css";


const TR = (props) => {
	
	return (
		<tr onClick={props.onClick}>
			<td>{props.type}</td>
			<td>{props.name}</td>
		</tr>
	
	)

}

function buildTable(data, setTableContent) {
	let arr = []
	data.map((item) => {
		arr.push(<TR type={item.type} name={item.name} onClick={()=>{window.location.pathname=`/adminpanel/edit/${item.type}/${item.id}`}}/>)
	})

	setTableContent(arr);
}


async function getRecords(type, setTableContent){
	let res = await AdminGET("/records-list?type=" + type);
	buildTable(res, setTableContent);
}

function AdminPanel() {

	let [tableContent, setTableContent] = useState([]);
	let [statusFilter, setStatusFilter] = useState('to moderator');
	let [ typeFilter, setTypeFilter ] = useState("*");

	const filterTable = async (typeFilter, statusFilter) => {
		let res = await AdminGET("/records-list?type=" + 0);

		let filtered = res.filter((item) => (item.status == statusFilter && (typeFilter == "*" || item.type == typeFilter) ));
		
		console.log("F", filtered, filtered.length);

		if (filtered.length == 0) { return setTableContent(
			<tr>
				<p style={{
					textAlign:"center", 
					position:"absolute",
					width:"100%",
					fontSize:"1.5rem",
					marginTop:5,
					}}>
						Нет записей
				</p>
			</tr>) }
		
		buildTable(filtered, setTableContent);
	} 

	useEffect(()=>{
		filterTable(typeFilter, statusFilter);
	}, [typeFilter, statusFilter]);

  return (
    <div className={styles.admin_form}>
		<div style={{
			width:"90%",
			display:'flex',
			flexDirection: "row",
			justifyContent: "end",
  			paddingBottom: 15,
			gap: 10,
		}}>

			<p></p>
			<select className={styles.select} onChange={(e)=>{setStatusFilter(e.target.value)}}>
				<option value="to moderator">На модерации</option>
				<option value="approved">Утвержденные</option>
				<option value='disapproved'> Отклоненные </option>	
	  		</select>

			<select className={styles.select} onChange={(e)=>{setTypeFilter(e.target.value)}}>
				<option value="*">Все</option>
				<option value="person">Личности</option>
				<option value='document'> Документы </option>	
	  		</select>

		</div>	
		

		<table className={styles.table}>
	
		  	<thead>
				<tr>
					<th>Тип</th>
					<th>Название</th>
				</tr>
			</thead>

	  		<tbody>
				{tableContent}
	  		</tbody>
	  	</table>

	</div>
  );
}

export default AdminPanel;
