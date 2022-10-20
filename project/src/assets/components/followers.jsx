import React from "react";
const Instagram = ({ name, bio }) => {
  const [addfoll, setAddfoll] = React.useState(false);
  return (
    <div className="follow_section">
      <div className="follow_card">
        <h4>{name}</h4>
        <b>{bio}</b>
        {!addfoll ? (
          <button onClick={() => setAddfoll(true)}>Follow</button>
        ) : (
          <button onClick={() => setAddfoll(false)}>Unfollow</button>
        )}
      </div>
    </div>
  );
};

export default Instagram;
