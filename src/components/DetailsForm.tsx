// src/components/DetailsForm.tsx
import React, { useState } from 'react';

interface DetailsFormProps {
  onChange: (formData: { [key: string]: string }) => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    onChange(newFormData);
  };

  return (
    <form>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
    </form>
  );
};

export default DetailsForm;
