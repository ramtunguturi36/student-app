import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the backend API
        axios.get('http://localhost:5000/api/students')
            .then((response) => {
                setStudents(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching students:', err);
                setError('Unable to fetch students.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Student Management System</h1>
            <h2>Student List</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        <strong>{student.name}</strong> - {student.email} - {student.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
