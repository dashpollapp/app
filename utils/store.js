import rootReducer from "../reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

import { auth_logout } from "../actions";

function getUserToken() {
	const token = store.getState().user.user.token;
	if (typeof token != typeof "") return false;
	return "Bearer " + token;
}

function dispatchLogout() {
	store.dispatch(auth_logout());
}


export let httpClient = axios.create({
	baseURL: 'https://api.dashpoll.net',
	responseType: 'json',
	headers: {
		"Content-Type": "application/json;charset=utf-8"
	},
	transformRequest: [
		(data, headers) => {
			const token = getUserToken();
			if (token) headers['Authorization'] = token;
			return JSON.stringify(data);
		}
	],
});

//logout on 401
httpClient.interceptors.response.use(res => res, err => {
	if (err.response.status === 401) {
		dispatchLogout();
	}
	return Promise.reject(err.response)
})

const middleware = [thunk, axiosMiddleware(httpClient)];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;