import { useState } from 'react';
// import { postGroupApi } from '../../requests/groupApi';
// import { useNavigate } from 'react-router-dom';

const KDefaultGroupState = {
  groupName: '',
  groupPicture: '',
  groupDescription: '',
};
const NewGroupForm = ({ createGroup }) => {
  const [formData, setFormData] = useState(KDefaultGroupState);
  const [showForm, setShowForm] = useState(false);
  // const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call parent function with form data
      await createGroup(formData);

      // Reset form
      setFormData(KDefaultGroupState);
      setShowForm(false);
    } catch (error) {
      console.error('Failed to create group:', error);
    }
  };
  // const inputName = event.target.name;
  // const inputValue = event.target.value;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const newGroup = await postGroupApi(formData);
  //     alert('Group created!');
  //     if (createGroup) {
  //       createGroup(newGroup);
  //     }

  //     navigate(`/groups/${newGroup.id}`);
  //   } catch (error) {
  //     console.error('Failed to create group:', error);
  //     alert('Something went wrong. Try again.');
  //   }
  // createGroup(formData);
  // setFormData(KDefaultGroupState);
  // };

  //   setFormData((formData) => ({
  //     ...formData,
  //     [inputName]: inputValue,
  //   }));
  // };

  return (
    <>
      <button onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? 'Hide New Group Form' : 'Create New Group!'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} action="/action_page.php">
          {/* <form onSubmit={handleSubmit} action="/action_page.php"> */}
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
      )}
    </>
  );
};

export default NewGroupForm;
