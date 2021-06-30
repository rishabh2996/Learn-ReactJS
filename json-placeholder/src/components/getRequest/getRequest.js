import React from "react"
import './getRequest.css'

class GetRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => { console.log(json); this.setState({ posts: json }) });
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                <div className="header">Lists of Posts</div>
                {
                    posts.length ?
                        posts.map(post => <div className="item" key={post.id}>{post.title}</div>) : null
                }
            </div >
        );
    }
}

export default GetRequest