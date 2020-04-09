import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';

class Post extends Component {
    state = {
        id: null,
    }
    back=()=>{
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="post">
                <h3 className='center'>More Information</h3>
                <div className="collection">
                    <div className="collection-item"><b>Title</b> : {this.props.post.title}</div>
                    <div className="collection-item"><b>Content</b> : {this.props.post.body}</div>
                    <div className="collection-item"><b>Type</b> : {this.props.post.type}</div>
                    <div className="collection-item"><b>Created</b> : {this.props.post.date} months ago</div>
                </div>
                <button className="waves-effect waves-light btn" onClick={this.back}>Back</button>
            </div>
        );

    }
}
const mapStatetoProps = (state, ownProps) => {
    let id = Number(ownProps.match.params.post_id);
    return {
        post: state.posts.find(post => post.id === id)
    }
}
export default connect(mapStatetoProps)(Post);