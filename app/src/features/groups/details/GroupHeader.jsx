import React from 'react';

const GroupHeader = ({ group }) => {
  return (
    <>
      <h1>{group.name}</h1>
      <img src={group.picture} alt={group.name} />
      <p aria-label="group-description">{group.description}</p>
    </>
  );
};

export default GroupHeader;
