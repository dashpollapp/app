import React from "react";
import { Provider } from "react-redux";

import RootApp from "./RootApp";
import store from "./utils/store";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootApp />   
            </Provider >
        );
    }
}