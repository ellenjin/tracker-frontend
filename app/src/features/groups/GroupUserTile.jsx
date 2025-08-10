import React from 'react';

const GroupUserTile = ({
  user,
  userLog,               // now explicitly pass the single log for this group
  onMatchSelect,
  matchOptions = [],
  selectedMatch = '',
}) => {
  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    const d = new Date(isoString);
    if (isNaN(d)) return 'N/A';
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="group-member-tile" style={styles.tile}>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Log:</strong> {userLog?.title || 'No log found'}</p>
      <p><strong>Date:</strong> {formatDate(userLog?.timeStamp)}</p>
      <p><strong>Partner:</strong> {userLog?.partnerName || 'no partner'}</p>
      <p><strong>Check-ins:</strong> {userLog?.checkInCount ?? 0}</p>

      <label htmlFor={`match-select-${user.username}`}><strong>Match with:</strong></label>
      <select
        id={`match-select-${user.username}`}
        value={selectedMatch}
        onChange={(e) => onMatchSelect(user.username, e.target.value)}
        style={styles.select}
      >
        <option value="">Choose member</option>
        {matchOptions.map((member) => (
          <option key={member.username} value={member.username}>
            {member.username} (Skill: {member.skillLevel})
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  tile: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  select: {
    marginTop: '6px',
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '250px',
  },
};

export default GroupUserTile;
