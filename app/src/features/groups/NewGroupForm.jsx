import { useState } from 'react';

const KDefaultGroupState = {
  groupName: '',
  groupPicture: '',
  groupDescription: '',
};
const NewGroupForm = () => {
  const [formData, setFormData] = useState(KDefaultGroupState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // neew to create function that makes POST requestonGroupSubmit(formData);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="groupName">Group Name</label>
      <input
        onChange={handleChange}
        type="text"
        name="groupName"
        value={formData['groupName']}
      />

      <label htmlFor="owner">Description</label>
      <input
        onChange={handleChange}
        type="text"
        name="groupDescription"
        value={formData['groupDescription']}
      />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default NewGroupForm;
