import { useState } from 'react';

const KDefaultGroupState = {
  groupId: '',
};

const JoinGroupForm = ({ joinGroup }) => {
  const [formData, setFormData] = useState(KDefaultGroupState);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const result = await joinGroup(formData.groupId);

    if (!result.success) {
      setError(result.message);
    } else {
      setFormData(KDefaultGroupState);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="groupId">Group ID</label>
      <input
        id="groupId"
        onChange={handleChange}
        type="text"
        name="groupId"
        value={formData.groupId}
        required
      />
      <button type="submit">Join Group</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default JoinGroupForm;
