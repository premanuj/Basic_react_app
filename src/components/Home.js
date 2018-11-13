import React, { Component } from 'react'
import { get } from "../utils/http_request";
import { Link } from "react-router-dom";

export default class Home extends Component {
    state = {
        posts: []
    }
    async componentDidMount() {
        let response = await get("https://jsonplaceholder.typicode.com/posts")

        this.setState({
            posts: response.data.slice(0, 10)
        })
    }

    postList = () => {

        const { posts } = this.state;
        if (!posts.length) {
            return <p>No post yet to display</p>
        }
        return posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <Link to={'/' + post.id}>
                        <span className="card-title">{post.title}</span>
                    </Link>
                    <div className="card-content">
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                {this.postList()}
            </div>
        )
    }
}
