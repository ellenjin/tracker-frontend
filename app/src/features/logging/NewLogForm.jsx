import React, { useState } from 'react';
import { createLogApi } from '../../requests/logApi';

// Controlled inputs form and ubmit button that calls createLogApi(logData) from logApi.js
const NewLogForm = ({ groupId }) => {
  const [formData, setFormData] = useState({
    title: '',
    frequencyCount: '',
    frequencyUnit: 'WEEK',
    skillLevel: 'BEGINNER',
    checkInCount: 0,
    partnerName: '',
    wantsPartner: false,
    group: { id: groupId },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createLogApi(formData);
    alert('Log created!');
    setFormData({ ...formData, title: '', partnerName: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 w-full"
      />
      <input
        name="frequencyCount"
        value={formData.frequencyCount}
        onChange={handleChange}
        placeholder="Frequency Count"
        type="number"
        className="border p-2 w-full"
      />
      <select
        name="frequencyUnit"
        value={formData.frequencyUnit}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="DAY">Day</option>
        <option value="WEEK">Week</option>
        <option value="MONTH">Month</option>
      </select>
      <select
        name="skillLevel"
        value={formData.skillLevel}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="BEGINNER">Beginner</option>
        <option value="INTERMEDIATE">Intermediate</option>
        <option value="ADVANCED">Advanced</option>
      </select>
      <input
        name="partnerName"
        value={formData.partnerName}
        onChange={handleChange}
        placeholder="Partner Name"
        className="border p-2 w-full"
      />
      <label>
        <input
          type="checkbox"
          name="wantsPartner"
          checked={formData.wantsPartner}
          onChange={handleChange}
        />
        Looking for a partner
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Log
      </button>
    </form>
  );
};

export default NewLogForm;
