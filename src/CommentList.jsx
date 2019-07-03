import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <ul className="CommentsList">
        {comments.map(data => <Comment comment={data} />)}
      </ul>
    );
  }
}

export default CommentList;
