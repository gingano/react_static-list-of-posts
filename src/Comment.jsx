import React from 'react';

class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <li key={comment.id}>
        <h1>{comment.name}</h1>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-email">
User email:
          {comment.email}
        </p>
      </li>
    );
  }
}

export default Comment;
