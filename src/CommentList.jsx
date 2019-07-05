import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <ul className="CommentsList">
        {comments.map(data => <li key={data.id}><Comment comment={data} /></li>)}
      </ul>
    );
  }
}

export default CommentList;
