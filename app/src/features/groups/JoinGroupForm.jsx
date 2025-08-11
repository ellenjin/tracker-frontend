import { useState } from 'react';
import { createLogApi } from '../../requests/logApi';
import { getOneGroupApi } from '../../requests/groupApi';
import { useUser } from '../../contexts/UserContext';

const KDefaultGroupState = {
  groupId: '',
};
const JoinGroupForm = () => {
  const [formData, setFormData] = useState(KDefaultGroupState);
  const [error, setError] = useState('');
  const { currentUser } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const group = await getOneGroupApi(formData.groupId);
      const request = {
        title: group.name,
        user: { id: currentUser.id },
        group: { id: group.id },
      };
      const response = await createLogApi(request);
      console.log('User added to group ', response.title);
      setError('');
      setFormData(KDefaultGroupState);
    } catch (error) {
      console.log(error);
      setError('Group ' + formData.groupId + ' could not be joined');
    }
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
      <div>{error || ''}</div>
    </form>
  );
};

export default JoinGroupForm;
