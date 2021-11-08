const BASE_URL = "http://127.0.0.1:8080/"

export const fetchAll = () => {
	return fetch(BASE_URL + "project", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
}

export const createNewProject = (project) => {
	return fetch(BASE_URL + "project", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(project)
	})
}


