import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {AdminGET} from "../API/api";

import styles from "./style.module.css";
import { useEffectEvent  } from 'react';

import { useNavigate } from 'react-router-dom';


const TR = (props) => {
	
	return (
		<tr onClick={props.onClick}>
			<td>{props.type}</td>
			<td>{props.name}</td>
		</tr>
	
	)

}






function AdminPanel() {
	const navigate = useNavigate();

	let [tableContent, setTableContent] = useState([]);
	let [statusFilter, setStatusFilter] = useState('to moderator');
	let [ typeFilter, setTypeFilter ] = useState("*");

	let typeFilterRef = useRef(null);
	let statusFilterRef = useRef(null);

	const getRecords = async (type, setTableContent) => {
		let res = await AdminGET("/records-list?type=" + type);
		buildTable(res, setTableContent);
	}

	const buildTable = (data, setTableContent) => {
		let arr = []
		data.map((item) => {
			arr.push(<TR type={item.type} name={item.name} onClick={()=>{navigate(`/adminpanel/edit/${item.type}/${item.id}`)}}/>)
		})

		setTableContent(arr);
	}

	const filterTable = async (typeFilter, statusFilter) => {
		localStorage['typeFilter']=typeFilter;
		localStorage['statusFilter']=statusFilter;

		let res = await AdminGET("/records-list?type=" + 0);

		let filtered = res.filter((item) => (item.status == statusFilter && (typeFilter == "*" || item.type == typeFilter) ));
		
		console.log("F", filtered, filtered.length);

		if (filtered.length == 0) { return setTableContent(
			<tr>
				<td >
						Нет записей
				</td>
				<td >
						Нет записей
				</td>
			</tr>) }
		
		buildTable(filtered, setTableContent);
	} 

	const loadLastFilter = () => {
		let tf = localStorage['typeFilter'];
		let sf = localStorage['statusFilter'];

		if (['*', "document", "person"].includes(tf)) { typeFilterRef.current.value=tf; }
		if (['approved', "disapproved", "to moderator"].includes(sf)) { statusFilterRef.current.value=sf; }

		setTypeFilter(tf);
		setStatusFilter(sf);
	}

	useEffect(()=>{
		loadLastFilter();
	}, [])

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
			<select className={styles.select} ref={statusFilterRef} onChange={(e)=>{setStatusFilter(e.target.value)}}>
				<option value="to moderator">На модерации</option>
				<option value="approved">Утвержденные</option>
				<option value='disapproved'> Отклоненные </option>	
	  		</select>

			<select className={styles.select} ref={typeFilterRef} onChange={(e)=>{setTypeFilter(e.target.value)}}>
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
