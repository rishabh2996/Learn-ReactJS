import React from 'react'
import './postRequest.css'

class PostRequest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: this.state.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div className="post-request">
                <form onSubmit={this.submitHandler}>
                    <div className="input-section">
                        <div className='label'>User ID</div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    </div >
                    <div className="input-section">
                        <div className='label'>Title</div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div >
                    <div className="input-section">
                        <div className='label'>Body</div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div >
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostRequest