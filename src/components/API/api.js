//const api_url = "http://localhost:8000";
const api_url = "https://chernobyl-phi-api.vercel.app";

export default async function POST(path, body) {
	console.log("SEND POST");

	let resp = await fetch(api_url + path, {
		method: "POST",
		body: body
	});

	let res = await resp.json();
	
	if (res.error) {
		alert("Ошибка: " + res.text) 
		return res;
	}
	
	return res;
}

export async function GET(path) {
	
	let resp = await fetch(api_url + path, {
		method: "GET",
	});

	let res = await resp.json();
	
	if (res.error) {
		console.log("Ошибка: " + res.text) 
		return null;
	}
	
	return res.data;
}

export async function AdminGET(path, body) {
	
	let resp = await fetch(api_url + path, {
		method: "GET",
		headers: {
            'Authorization': `Bearer ${localStorage['jwt']}`
		},	
	});

	if (resp.status == 401) { return window.location.pathname = "/adminpanel/login"; }

	let res = await resp.json();
	
	if (res.error) {
		alert("Ошибка: " + res.text) 
		return res;
	}
	
	return res.data;
}


export async function AdminPOST(path, body) {
	
	let resp = await fetch(api_url + path, {
		method: "POST",
		headers: {
            'Authorization': `Bearer ${localStorage['jwt']}`,
			'Content-Type': 'application/json'	
		},	
		body: body,
	});

	
	if (resp.status == 401) { return window.location.pathname = "/adminpanel/login"; }


	let res = await resp.json();
	
	if (res.error) {
		alert("Ошибка: " + res.text) 
		return res;
	}
	
	return res;
}



export async function docsSearch(query) {
	let resp = await fetch(api_url + "/search?query=" + query, {
		method:"GET"
	})

	let res = await resp.json();
	
	if (res.error) { return alert("ОШИБКА: " + res.text) }
	console.log(res);
	return res['data'];
}
