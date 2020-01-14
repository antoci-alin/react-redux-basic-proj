import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id} className="card mb-2">
				<div className="card-header">{post.title}</div>
				<div className="card-body">
					<p className="card-text">{post.body}</p>
				</div>
			</div>
		));
		return (
			<div className="mt-5">
				<h1>Posts</h1>
				<hr />
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
};

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
