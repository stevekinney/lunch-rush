import React, { PropTypes } from 'react';
import { auth } from './firebase';

const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <img
        className="UserInfo--photo"
        src={ user.photoURL }
        alt={ user.displayName }
      />
      <div className="UserInfo--identification">
        <h3 className="UserInfo--displayName">{ user.displayName }</h3>
        <p className="UserInfo--email">{ user.email }</p>
        <button
          className="UserInfo--signout"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default UserInfo;
