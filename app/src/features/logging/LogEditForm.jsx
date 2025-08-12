import { useState, useEffect } from 'react';

const LogEditForm = ({ log, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    frequencyCount: '',
    frequencyUnit: '',
    skillLevel: '',
    wantsPartner: false,
    partnerName: '',
  });

  useEffect(() => {
    if (log) {
      setFormData({
        title: log.title || '',
        frequencyCount: log.frequencyCount || '',
        frequencyUnit: log.frequencyUnit || 'day',
        skillLevel: log.skillLevel || 'beginner',
        wantsPartner: log.wantsPartner || false,
        partnerName: log.partnerName || '',
      });
    }
  }, [log]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Log</h3>
      <div>
        <label>Title:</label>
        <input name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Frequency Count:</label>
        <input
          name="frequencyCount"
          type="number"
          value={formData.frequencyCount}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <label>Frequency Unit:</label>
        <select
          name="frequencyUnit"
          value={formData.frequencyUnit}
          onChange={handleChange}
        >
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
        </select>
      </div>
      <div>
        <label>Skill Level:</label>
        <select
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label>
          <input
            name="wantsPartner"
            type="checkbox"
            checked={formData.wantsPartner}
            onChange={handleChange}
          />
          Looking for Partner
        </label>
      </div>
      <div>
        <label>Partner Name:</label>
        <input
          name="partnerName"
          value={formData.partnerName}
          onChange={handleChange}
          disabled={!formData.wantsPartner}
        />
      </div>

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: '1rem' }}>
        Cancel
      </button>
    </form>
  );
};

export default LogEditForm;
