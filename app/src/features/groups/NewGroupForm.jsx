import { useState } from 'react';
import './NewGroupForm.css';

const KDefaultGroupState = {
  groupName: '',
  groupPicture: '',
  groupDescription: '',
};
const NewGroupForm = ({ createGroup }) => {
  const [formData, setFormData] = useState(KDefaultGroupState);

  const handleSubmit = (event) => {
    event.preventDefault();
    createGroup(formData);
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
      <label htmlFor="groupName">Name</label>
      <input
        id="groupName"
        onChange={handleChange}
        type="text"
        name="groupName"
        value={formData['groupName']}
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        onChange={handleChange}
        type="text"
        name="groupDescription"
        value={formData['groupDescription']}
      />
      {/* <label htmlFor="groupPicture">Picture</label>
      <input
        type="file"
        id="groupPicture"
        name="groupPicture"
        onChange={handleChange}
      /> */}
      <button type="submit">Create Group</button>
    </form>
  );
};

export default NewGroupForm;
