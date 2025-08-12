const GroupTile = ({ name, description, id }) => {
  return (
    <div className="group-tile">
      <p>Group name: {name}</p>
      <p>Group ID: {id}</p>
      <p>Group description: {description}</p>
    </div>
  );
};

export default GroupTile;
