import React from 'react';

const Comment = ({ comment }) => (
  <div>
    <h2>{comment.name}</h2>
    <p className="comment-body">{comment.body}</p>
    <p className="comment-email">
User email:
      {comment.email}
    </p>
  </div>
);

export default Comment;
