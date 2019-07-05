import React from 'react';
import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import Post from './Post';

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({
      posts: this.makePosts(posts, users, comments),
    });
  }

  makePosts(posts, users, comments) {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    }));
  }

  render() {
    return (
      <div>
        <ul className="PostList">
          {this.state.posts.map(data => <li key={data.id}><Post post={data} /></li>)}
        </ul>
      </div>
    );
  }
}

export default PostList;
