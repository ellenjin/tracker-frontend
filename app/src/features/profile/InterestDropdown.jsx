const InterestDropdown = ({ selectedInterests, onChange }) => {
  // const [selectedInterests, setSelectedInterests] = useState([]);
  const interests = [
    'running',
    'cooking',
    'cleaning',
    'swimming',
    'meditating',
    'Took vitamins',
    'reading',
    'journaling',
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updated;

    if (checked) {
      updated = [...selectedInterests, value];
    } else {
      updated = selectedInterests.filter((interest) => interest !== value);
    }

    onChange(updated);
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
