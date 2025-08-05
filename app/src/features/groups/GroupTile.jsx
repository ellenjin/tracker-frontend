import './GroupTile.css';

const GroupTile = ({ name, description }) => {
  return (
    <div className="group-tile">
      <p>Group name: {name}</p>
      <p>Group description: {description}</p>
    </div>
  );
};

export default GroupTile;
