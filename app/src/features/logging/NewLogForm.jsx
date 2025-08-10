import React, { useState } from 'react';
import { createLogApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';

// Controlled inputs form and submit button that calls createLogApi(logData) from logApi.js
const NewLogForm = ({ userId, groupId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    frequencyCount: 0,
    frequencyUnit: 'WEEK',
    skillLevel: 'BEGINNER',
    checkInCount: 0,
    wantsPartner: false,
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

    const payload = {
      title: formData.title,
      frequencyCount: formData.frequencyCount,
      frequencyUnit: formData.frequencyUnit,
      skillLevel: formData.skillLevel,
      checkInCount: formData.checkInCount,
      wantsPartner: Boolean(formData.wantsPartner),
      group: { id: groupId },
      user: { id: userId },
    };

    try {
      const response = await createLogApi(payload);
      alert('Log created!');
      navigate(`/logs/${response.logId}`);

      // Reset form
      setFormData({
        title: '',
        frequencyCount: 0,
        frequencyUnit: 'WEEK',
        skillLevel: 'BEGINNER',
        checkInCount: 0,
        wantsPartner: false,
      });
    } catch (error) {
      console.error('Failed to create log:', error);
      alert('Something went wrong. Try Again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="frequencyCount"
          value={formData.frequencyCount}
          onChange={handleChange}
          placeholder="Frequency Count"
          type="number"
        />
        <select
          name="frequencyUnit"
          value={formData.frequencyUnit}
          onChange={handleChange}
        >
          <option value="DAY">Day</option>
          <option value="WEEK">Week</option>
          <option value="MONTH">Month</option>
        </select>
        <select
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
        >
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCED">Advanced</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="wantsPartner"
            checked={formData.wantsPartner}
            onChange={handleChange}
          />
          Looking for a partner
        </label>
        <button type="submit"> Add Log </button>
      </form>
    </>
  );
};

export default NewLogForm;
