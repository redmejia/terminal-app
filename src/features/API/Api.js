const BASE_URL = "http://127.0.0.1:8080/"


export const Api = {
	// Auth signin or register
	async signin(developer) {
		const resp = await fetch(BASE_URL + "signin", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(developer)
		})

		return resp.json()

	},

	async register(developer) {
		const resp = await fetch(BASE_URL + "register", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(developer)
		})

		return resp.json()

	},






	// projects fetch, create update and delete
	async fetchAll() {
		const resp = await fetch(BASE_URL + "project", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return resp.json()
	},

	async createNewProject(project) {
		const resp = await fetch(BASE_URL + "project", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(project)
		})

		return resp.json()
	}

}


// export const fetchAll = () => {
// 	return fetch(BASE_URL + "project", {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// }

// export const createNewProject = (project) => {
// 	return fetch(BASE_URL + "project", {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(project)
// 	})
// }


// // Auths
// export const signinOrRegister = (developer) => {
// 	return fetch(BASE_URL + "signin", {
// 		method: "POST",
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(developer)
// 	})
// }
