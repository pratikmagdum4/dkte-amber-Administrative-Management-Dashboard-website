import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const StudentFormTable = forwardRef(({ title }, ref) => {
    const [students, setStudents] = useState([
        { rank: 1, stdname: '', cgpa: '' },
        { rank: 2, stdname: '', cgpa: '' },
        { rank: 3, stdname: '', cgpa: '' },
        { rank: 4, stdname: '', cgpa: '' },
        { rank: 5, stdname: '', cgpa: '' },
    ]);

    useEffect(() => {
        
        const savedStudents = JSON.parse(localStorage.getItem(`${title}-students`));
        if (savedStudents) {
            setStudents(savedStudents);
        }
    }, [title]);


    const handleChange = (index, field, value) => {
        const newStudents = [...students];
        newStudents[index][field] = value;
        setStudents(newStudents);
        localStorage.setItem(`${title}-students`, JSON.stringify(newStudents));
    };

    useImperativeHandle(ref, () => ({
        students
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hi i m here ")
        const dataToSend = { students };
        console.log("The data is ", dataToSend)
        try {
            const response = await axios.post('/api/save', dataToSend);
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
            <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Save
            </button>
        </div>
    );
});

export default StudentFormTable;
