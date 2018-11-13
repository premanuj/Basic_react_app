import React, { Component } from 'react'
// import axios from "axios"
import { get } from "../utils/http_request";

export default class Post extends Component {
    state = {
        post: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.post_id
        let response = await get("https://jsonplaceholder.typicode.com/posts/" + id)
        this.setState({
            post: response.data
        })

    }
    render() {
        const { post } = this.state
        return (
            <div className="container">
                <div className="post card">
                    <span className="card-title">{post.title}</span>
                    <div className="card-content">
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}
