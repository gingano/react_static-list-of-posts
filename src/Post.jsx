import React from 'react'
import CommentList from './CommentList'
import User from './User'

class Post extends React.Component {
  state = {
    commentsVisible: false
  }

  countOfComments = (post) => {
    let items = post.comments.filter(el => el.postId === post.id)
    return items.length
  }

  showComments = () => {
     this.setState({
      commentsVisible: !this.state.commentsVisible,
    })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {post} = this.props;
    return (
      <li key={post.id}>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <User user={this.props.post.user} />
          <button onClick={this.showComments}>
            {this.state.commentsVisible
              ? "Hide comments"
              : "Show " + this.countOfComments(post) + " comments"}
          </button>
        </div>
        {this.state.commentsVisible
          ? <CommentList comments={this.props.post.comments} />
          : null}
      </li>
    );
  }
}

export default Post;
