import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		};

		this.props.createPost(post);
	}

	render() {
		return (
			<div className="mt-5">
				<h2>Add Post</h2>
				<hr />
				<form action="" onSubmit={this.onSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<br />
						<input className="form-control" type="text" name="title" onChange={this.onChange} value={this.state.title} />
					</div>
					<div>
						<label htmlFor="body">Body:</label>
						<br />
						<textarea className="form-control" name="body" onChange={this.onChange} cols="30" rows="5" value={this.state.body}></textarea>
					</div>
					<br />
					<button className="btn-success btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
