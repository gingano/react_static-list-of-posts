import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <ul className="CommentsList">
        {comments.map(comment => <Comment comment={comment} />)}
      </ul>
    );
  }
}

export default CommentList;
