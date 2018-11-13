import rootReducer from "../reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

function getUserToken() {
	const token = store.getState().user.token;
	if (typeof token != typeof "") return false;
	return "Bearer " + token;
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

const middleware = [thunk, axiosMiddleware(httpClient)];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;