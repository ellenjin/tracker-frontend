import { useState } from 'react';

const KDefaultGroupState = {
  groupId: '', // May want to change to name?
};
const JoinGroupForm = ({ setGroup }) => {
  const [formData, setFormData] = useState(KDefaultGroupState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Axios call to join a group`
    setGroup(formData);
    setFormData(KDefaultGroupState);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setFormData((formData) => ({
      ...formData,
      [inputName]: inputValue,
    }));
  };

  return (
    <form onSubmit={handleSubmit} action="/action_page.php">
      <label htmlFor="groupId">Group ID</label>
      <input
        id="groupId"
        onChange={handleChange}
        type="text"
        name="groupId"
        value={formData['groupId']}
      />
      <button type="submit">Join Group</button>
    </form>
  );
};

export default JoinGroupForm;
