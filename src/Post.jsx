import React from 'react'
import CommentList from './CommentList'
import User from './User'

class Post extends React.Component {
  state = {
    commentsVisible: false
  }

  countOfComments = (post) => post.comments.filter(el => el.postId === post.id).length

  showComments = () => {
    this.setState((prevState) => ({
      commentsVisible: !prevState.commentsVisible,
    }))
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {post} = this.props;
    return (
      <div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <User user={post.user} />
          <button onClick={this.showComments}>
            {this.state.commentsVisible
              ? "Hide comments"
              : "Show " + this.countOfComments(post) + " comments"}
          </button>
        </div>
        {this.state.commentsVisible
          ? <CommentList comments={this.props.post.comments} />
          : null}
      </div>
    );
  }
}

export default Post;
