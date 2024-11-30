import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '', course: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/students', formData);
        alert('Student added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="age" placeholder="Age" onChange={handleChange} />
            <input name="course" placeholder="Course" onChange={handleChange} />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudent;
