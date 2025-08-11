import './details/GroupUserTile.css';
// import { useUser } from '../auth/UserContext';

const GroupUserTile = ({ user, userLog, onRemind }) => {
  // const { currentUser } = useUser();
  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    const d = new Date(isoString);
    if (isNaN(d)) return 'N/A';
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="group-member-tile">
      <p>
        <strong>Name:</strong> {user.username}
      </p>
      <p>
        <strong>Log:</strong> {userLog?.title || 'No log found'}
      </p>
      <p>
        <strong>Date:</strong> {formatDate(userLog?.timeStamp)}
      </p>
      <p>
        <strong>Partner:</strong> {userLog?.partnerName || 'no partner'}
      </p>
      <p>
        <strong>Check-ins:</strong> {userLog?.checkInCount ?? 0}
      </p>
      <button onClick={onRemind}>Remind</button>
    </div>
  );
};

export default GroupUserTile;
