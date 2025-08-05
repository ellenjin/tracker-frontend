import { useState } from 'react';

const InterestDropdown = ({ selectedInterests, setSelectedInterests }) => {
  // const [selectedInterests, setSelectedInterests] = useState([]);
  const interests = [
    'running',
    'cooking',
    'cleaning',
    'swimming',
    'meditating',
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedInterests([...selectedInterests, value]);
    } else {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== value)
      );
    }
  };

  return (
    <label>
      Interests:
      <div>
        {interests.map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              value={interest}
              checked={selectedInterests.includes(interest)}
              onChange={handleCheckboxChange}
            />
            {interest.charAt(0).toUpperCase() + interest.slice(1)}
          </label>
        ))}
      </div>
      <p>Selected Interests: {selectedInterests.join(', ')}</p>
    </label>
  );
};
export default InterestDropdown;
