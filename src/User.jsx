import React from 'react';

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user">
        <div>
Author: {user.name}
        </div>
        <div>
Author Email: {user.email}
        </div>
      </div>
    );
  }
}

export default User;
