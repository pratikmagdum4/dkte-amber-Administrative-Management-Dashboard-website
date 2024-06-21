import React, { useState, useEffect } from 'react';
import axios from 'axios';
const StudentFormTable = ({ title }) => {
    const [students, setStudents] = useState([
        { rank: 1, name: '', cgpa: '' },
        { rank: 2, name: '', cgpa: '' },
        { rank: 3, name: '', cgpa: '' },
        { rank: 4, name: '', cgpa: '' },
        { rank: 5, name: '', cgpa: '' },
    ]);

    useEffect(() => {
        // Load saved data from localStorage
        const savedStudents = JSON.parse(localStorage.getItem('students'));
        if (savedStudents) {
            setStudents(savedStudents);
        }
    }, []);

    const handleChange = (index, field, value) => {
        const newStudents = [...students];
        newStudents[index][field] = value;
        setStudents(newStudents);
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to send
        const dataToSend = {
            students: students, // Assuming students is an array of student objects
        };

        try {
            // Make a POST request to your backend
            const response = await axios.post('{title}/api/create', dataToSend);
            console.log('Data sent successfully:', response.data);
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Error saving data. Please try again.');
        }
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <form onSubmit={handleSubmit}>
                <table className="min-w-full bg-white dark:bg-zinc-800">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">RANK</th>
                            <th className="py-2 px-4 border-b">STUDENT'S NAME</th>
                            <th className="py-2 px-4 border-b">CGPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b text-center">{student.rank}</td>
                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="text"
                                        value={student.name}
                                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="text"
                                        value={student.cgpa}
                                        onChange={(e) => handleChange(index, 'cgpa', e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Save
                </button>
            </form>
        </div>
    );
};

export default StudentFormTable;
