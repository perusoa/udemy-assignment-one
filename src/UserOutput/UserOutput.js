import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  const styles = {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontStyle: 'italic'
  };

  return (
    <div className="UserOutput">
      <p>My username is: <span style={styles}>{props.username}</span> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default UserOutput;