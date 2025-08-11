import React, { useState } from 'react';
import { createLogApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';

// Controlled inputs form and submit button that calls createLogApi(logData) from logApi.js
const NewLogForm = ({ userId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    frequencyCount: 0,
    frequencyUnit: 'WEEK',
    skillLevel: 'BEGINNER',
    score: 0,
    checkInCount: 0,
    wantsPartner: false,
    partnerName: '',
    timeStamp: new Date().toISOString(),
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
      frequencyCount: Number(formData.frequencyCount),
      frequencyUnit: formData.frequencyUnit,
      skillLevel: formData.skillLevel,
      score: Number(formData.score),
      checkInCount: Number(formData.checkInCount),
      wantsPartner: Boolean(formData.wantsPartner),
      partnerName: formData.partnerName.trim() || null,
      timeStamp: new Date().toISOString(),
      group: formData.group?.id ? { id: formData.group.id } : null,
      user: { id: userId },
    };

    console.log('payload ->', payload);

    try {
      const response = await createLogApi(payload);
      alert('Log created!');
      navigate(`/logs/${response.logId}`);

      // // Reset form
      // setFormData({
      //   title: '',
      //   frequencyCount: 0,
      //   frequencyUnit: 'WEEK',
      //   skillLevel: 'BEGINNER',
      //   score: 0, // reset score
      //   checkInCount: 0,
      //   wantsPartner: false,
      //   partnerName: null,
      //   timeStamp: '',
      // });
    } catch (error) {
      console.error('Failed to create log:', error);
      alert('Something went wrong. Try Again.');
    }
  };

  return (
    <>
      <label htmlFor="title">Log Title:</label>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <label htmlFor="frequencyCount">Frequency Count:</label>
        <input
          name="frequencyCount"
          value={formData.frequencyCount}
          onChange={handleChange}
          placeholder="Frequency Count"
          type="number"
        />
        <label htmlFor="frequencyUnit">times per a</label>
        <select
          name="frequencyUnit"
          value={formData.frequencyUnit}
          onChange={handleChange}
        >
          <option value="DAY">Day</option>
          <option value="WEEK">Week</option>
          <option value="MONTH">Month</option>
        </select>

        <label htmlFor="skillLevel">Skill Level:</label>
        <select
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
        >
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCED">Advanced</option>
        </select>
        <label htmlFor="score">Starting Score:</label>
        <input
          name="score"
          value={formData.score}
          onChange={handleChange}
          type="number"
          placeholder="Score"
        />
        <label>
          <input
            type="checkbox"
            name="wantsPartner"
            checked={formData.wantsPartner}
            onChange={handleChange}
          />
          Looking for a partner?
        </label>
        <label htmlFor="partnerName">
          Or do you already have a partner in mind? Partner Name:
        </label>
        <input
          name="partnerName"
          value={formData.partnerName}
          onChange={handleChange}
          placeholder="Partner Name"
        />
        <button type="submit"> Add Log </button>
      </form>
    </>
  );
};

export default NewLogForm;
