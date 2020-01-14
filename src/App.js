import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Header from "./components/Header";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<PostForm />
					<Posts />
				</div>
			</Provider>
		);
	}
}

export default App;
