import { useState } from 'react';

const InterestDropdown = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleChange = (e) => {
    const interests = e.target.options;
    const selectedInterests = [];

    for (let i = 0; i < interests.length; i++) {
      if (interests[i].selected) {
        selectedInterests.push(interests[i].value);
      }
    }
    setSelectedInterests(selectedInterests);
  };

  return (
    <label>
      Interests:
      <select
        name="selectedInterests"
        multiple={true}
        value={selectedInterests}
        onChange={handleChange}
      >
        <option value="running">Running</option>
        <option value="cooking">Cooking</option>
        <option value="cleaning">Cleaning</option>
      </select>
      <p>Selected Interests: {selectedInterests.join(', ')}</p>
    </label>
  );
};
export default InterestDropdown;
