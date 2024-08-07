
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const addSkill = (data) => {
    const newSkill = { id:toString(36), title: data.title };
    setSkills([...skills, newSkill]);
    reset();
  };

  const DisplayData = ({ skills }) => {
    return (
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
        <h1>fullstackdeveloper</h1>
        <DisplayData skills={skills} />
      <form onSubmit={handleSubmit(addSkill)}>
        <input
          type="text"
          {...register('title', { required: true })}
          placeholder="Skill Title"
        />
        <button type="submit">+</button>
      </form>
      
    </div>
  );
};

export default Skill;


