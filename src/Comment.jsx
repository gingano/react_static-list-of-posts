import React from 'react';

const Comment = ({ comment }) => (
  <li key={comment.id}>
    <h2>{comment.name}</h2>
    <p className="comment-body">{comment.body}</p>
    <p className="comment-email">
User email:
      {comment.email}
    </p>
  </li>
);

export default Comment;
